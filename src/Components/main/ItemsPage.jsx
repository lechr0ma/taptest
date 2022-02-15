import React, {useState} from 'react';
import classes from './ItemsPage.module.css';
import Item from "../static/Item";
import {useDispatch, useSelector} from "react-redux";
import {itemsMass} from "../../App";
import Hint from "../static/Hint";
import {filteredItems, filteredAndChosen} from "../../logic/itemspage";
import larr from '../../img/leftarr.svg'

const ItemsPage = () => {

    const hintShow = useSelector(state => state.hints);
    const road = useSelector(state => state.road)
    const dispatch = useDispatch();
    const initialList = itemsMass.map(element =>
        <Item
            key={element.id}
            item={element}
            id={element.id}
            img={element.image}
            description={element.description}
            rem={setOption}
            showBtn={true}
            get={false}
        />
    )
    const [options, setOptions] = useState({
        show: false,
        image: '',
        description: ''
    });
    const [noItem, setNoItem] = useState('Вы пока не выбрали ни одного элемента.')
    const [item, setItem] = useState({
        quantity: 1,
        volume:'',
        netto:'',
        brutto:'',
        cost:'',
    })

    const [itemsList, setItemsList] = useState(initialList)
    let hint = options.show
        ?
        ''
        :
        <div className={classes.hint}>
            <img src={larr} alt="arrow"/>
            <p>Введите название мебели в строку поиска или выберите мебель из предложенного списка</p>
        </div>;

    function filterItems() {
        let text = document.getElementById('search').value
        return filteredItems(text, setItemsList, itemsMass, setOption)
        }

    function setOption(currentitem, id) {
        let text = document.getElementById('search').value
        return filteredAndChosen(text, setItemsList, setItem, setOptions, currentitem, id, itemsMass, setOption)
    }

    function resetItem() {
            setItemsList(initialList)
            setOptions({
                ...options,
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
                    cost: item.cost,
                    multiply: road.multiply}
            })
        setItem({
                quantity: 1,
                volume:'',
                netto:'',
                brutto:'',
                cost:'',}
        )
        setOptions({
                show: false,
                image: '',
                description: ''
            }
        )
        setNoItem(<>Вы можете добавить еще элемент или перейти к списку по ссылке вверху страницы</>)
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
                { !options.show  ?
                    <div className={classes.noItems}>{noItem}</div>
                    :
                    <div className={classes.item__options}>
                    <div className={classes.currentItem}>
                        {hintShow[1] && <Hint
                            body='Теперь заполните поля для этого элемента'
                            num={1}
                            arrow='down'
                            style={{
                                flexDirection: 'row-reverse',
                                top: -70,
                                width: 460,
                                height: 55,
                            }}/>
                        }
                    <Item img={options.image} description={options.description} showBtn={false}/>
                    </div>
                    <div className={classes.quantity}>
                        <p>Кол-во:</p>
                        <div className={classes.quantity__counter}>
                            <button onClick={()=> {if (item.quantity !==1){setItem({...item, quantity: item.quantity - 1})}}}>&#8722;</button>
                            <div><h2>{item.quantity}</h2></div>
                            <button onClick={()=> setItem({...item, quantity: item.quantity + 1})}>&#43;</button>
                        </div>
                    </div>
                    <input value={item.volume} type="number" min={1} onChange={event => setItem({...item, volume: event.target.value})} placeholder="Объем, м3"/>
                    <input value={item.netto} type="number" min={1} onChange={event => setItem({...item, netto: event.target.value})} placeholder="Масса Нетто, кг"/>
                    <input value={item.brutto} type="number" min={1} onChange={event => setItem({...item, brutto: event.target.value})} placeholder="Масса Брутто, кг"/>
                    <input value={item.cost} type="number" min={1} onChange={event => setItem({...item, cost: event.target.value})} placeholder="Стоимость в выбранной валюте"/>
                        {hintShow[2] && <Hint
                            body='Здесь вы можете сбросить параметры и добавить элемент'
                            arrow='right'
                            num={2}
                            style={{
                                bottom: 10,
                                width: 580,
                                left: -650,
                                height: 55,
                            }}/>
                        }
                    <div className={classes.optionBtns}>
                        <button onClick={()=>setItem({
                            quantity: 1,
                            volume:'',
                            netto:'',
                            brutto:'',
                            cost:'',
                        })}>Сбросить</button>
                        {+item.netto && +item.brutto && +item.cost && +item.volume ?
                            <button onClick={addItem}>Добавить</button>
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