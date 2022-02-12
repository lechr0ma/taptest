import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classes from './ItemsPage.module.css';
import Item from "../static/Item";
import {useDispatch, useSelector} from "react-redux";
import {itemsMass} from "../../App";

const ItemsPage = () => {
    let hint;
    const hintShow = useSelector(state => state.hints);
    const dispatch = useDispatch();
    const [options, setOptions] = useState({
        show: false,
        image: '',
        description: ''
    });
    const [item, setItem] = useState({
        quantity: 1,
        volume:'',
        netto:'',
        brutto:'',
        cost:'',

    })
    const [itemsList, setItemsList] = useState(itemsMass.map(element =>
        <Item item={element} id={element.id} img={element.image} description={element.description} rem={setOption} showBtn={true} get={false}/>
        ))
    function filterItems() {
        let text = document.getElementById('search').value
        setItemsList(itemsMass.filter(e => e.description.toUpperCase().includes(text)).map(element =>
            <Item item={element} id={element.id} img={element.image} description={element.description} rem={setOption} showBtn={true}/>
            ))
        }
    if (!options.show){
        hint = <div className={classes.hint}>
                    <h1>&larr;</h1>
                    <p>Введите название мебели в строку поиска или выберите мебель из предложенного списка</p>
                </div>;
        }

    const setHint = (num) => {
        dispatch({type: 'SET_HINT', payload:num})
        }
    function setOption(currentItem, id) {
        let text = document.getElementById('search').value;
        if (text){
            setItemsList(itemsMass.filter(e => e.description.toUpperCase().includes(text)).map(element =>
                <Item item={element} img={element.image} id={element.id} description={element.description} rem={setOption} showBtn={true} get={true}/>
            ))
        }else{
            setItemsList(itemsMass.map(element => element.id == id ?
                <Item item={element}  id={element.id} img={element.image} description={element.description} rem={setOption} showBtn={true} get={true}/>
                : <Item item={element}   id={element.id} img={element.image} description={element.description} rem={setOption} showBtn={true} get={false}/>
            )
        )}
        setOptions({
            show: true,
            description: currentItem.description,
            image: currentItem.image
        });
        }
    function resetItem() {
            setItemsList(itemsMass.map(element =>
                <Item item={element} id={element.id} img={element.image} description={element.description} rem={setOption} showBtn={true} get={false}/>
            ))
            setOptions({...options,
                show: false
            })
        }

    function addItem() {
            dispatch({
                type: 'ADD_ITEM', payload: {
                    key: Date.now(),
                    image: options.image,
                    description: options.description,
                    quantity: item.quantity,
                    netto: item.netto,
                    brutto: item.brutto,
                    volume: item.volume,
                    cost: item.cost
                }
            })
    }
    return (
        <div className={classes.container}>
            <div className={classes.itemsList}>
                <h2>
                    Выберите мебель, которую нужно перевезти
                    </h2>
                <div className={classes.itemsList__search}>
                    <input id='search' onChange={(event) => {if (!event.target.value){ resetItem() }}} placeholder='Введите название'/>
                        <button onClick={filterItems}>Поиск</button>
                    {hint}
                </div>
                <div className={classes.itemsList__list}>
                    {itemsList}
                </div>
            </div>
            <div className={classes.itemOption}>
                <h2>Затем заполните следующие поля выбранного элемента:</h2>
                { !options.show ?
                    <div className={classes.noItems}>Вы пока не выбрали ни одного элемента.</div>
                    :
                    <div className={classes.item__options}>
                    <div className={classes.currentItem}>
                        {hintShow[1] && <div className={classes.hint__item}>
                            <p>Теперь заполните поля для этого элемента
                                &#8595;</p>
                            <button onClick={()=>setHint(1)}>&#215;</button>
                        </div>}
                    <Item img={options.image} description={options.description} showBtn={false}/>
                    </div>
                    <div className={classes.quantity}>
                        <p>Кол-во:</p>
                        <div className={classes.quantity__counter}>
                            <button onClick={()=> {if (item.quantity !==1){setItem({...item, quantity: item.quantity -= 1})}}}>&#8722;</button>
                            <div><h2>{item.quantity}</h2></div>
                            <button onClick={()=> setItem({...item, quantity: item.quantity += 1})}>&#43;</button>
                        </div>
                    </div>
                    <input value={item.volume} type="number" onChange={event => setItem({...item, volume:event.target.value})} placeholder="Объем, м3"/>
                    <input value={item.netto} type="number" onChange={event => setItem({...item, netto: event.target.value})} placeholder="Масса Нетто, кг"/>
                    <input value={item.brutto} type="number" onChange={event => setItem({...item, brutto: event.target.value})} placeholder="Масса Брутто, кг"/>
                    <input value={item.cost} type="number" onChange={event => setItem({...item, cost: event.target.value})} placeholder="Стоимость в выбранной валюте"/>
                    <div className={classes.optionBtns}>
                        {hintShow[2] &&  <div className={classes.hint__reset}>
                            <button onClick={() => setHint(2)}>&#215;</button>
                            <p>Здесь вы можете сбросить параметры и добавить элемент
                                &#10230;</p>

                        </div>}
                        <button onClick={()=>setItem({
                            quantity: 1,
                            volume:'',
                            netto:'',
                            brutto:'',
                            cost:'',
                        })}>Сбросить</button>
                        {item.netto && item.brutto && item.cost && item.volume ?
                            <Link to='/basket'><button onClick={addItem}>Добавить</button></Link>
                            :
                            <button style={{backgroundColor: 'teal'}}>Заполните поля</button>
                        }

                    </div>
                </div>}
            </div>
        </div>
    );
};

export default ItemsPage;