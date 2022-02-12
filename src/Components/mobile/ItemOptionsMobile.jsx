import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {itemsMass} from "../../App";
import cl from "./Itemlist.module.css";
import {useDispatch} from "react-redux";
import Header from "./Header";

const ItemOptionsMobile = () => {
    const hist = useNavigate();
    const link = useParams();
    const dispatch = useDispatch();
    const item = itemsMass.filter(e => e.id == link.id)[0];
    const [select, setSelect] = useState({
        key: Date.now(),
        id: item.id,
        image: item.image,
        description: item.description,
        quantity:'',
        volume:'',
        netto:'',
        brutto:'',
        cost: '',});
     function submit() {
        dispatch({type: 'ADD_ITEM', payload: select});
         hist('/basket') ;
     }
     function reset() {
        setSelect({
            key: Date.now(),
            id: item.id,
            image: item.image,
            description: item.description,
            quantity:'',
            volume:'',
            netto:'',
            brutto:'',
            cost: '',})
     }

    return (
        <div className={cl.container__options}>
            <Header goback={true}/>
            <div className={cl.item__current}>
                <img src={item.image} alt=""/>
                <p>{item.description}</p>
            </div>
            <div className={cl.item__input}>
                <input value={select.quantity} onChange={e => setSelect({...select, quantity: e.target.value} )} type="number" placeholder='Кол-во'/>
                <input value={select.volume} onChange={e => setSelect({...select, volume:e.target.value }) } type="number" placeholder='Общий объем, м3'/>
                <input value={select.netto} onChange={e => setSelect({...select, netto:e.target.value }) } type="number" placeholder='Масса Нетто, кг'/>
                <input value={select.brutto} onChange={e => setSelect({...select, brutto:e.target.value }) } type="number" placeholder='Масса Брутто, кг'/>
                <input value={select.cost} onChange={e => setSelect({...select, cost:e.target.value }) } type="number" placeholder='Стоимость единицы'/>
            </div>
            <div className={cl.item__buttons}>
                <button onClick={reset}>Сбросить</button>
                {select.quantity > 0 && select.volume > 0 && select.netto > 0 && select.brutto > 0 && select.cost > 0 ?
                    <button onClick={submit}>Продолжить</button>
                :
                    <button disabled={true} style={{backgroundColor: "teal"}} onClick={submit}>Заполните поля для добавления товара</button>}

            </div>

        </div>
    );
};

export default ItemOptionsMobile;