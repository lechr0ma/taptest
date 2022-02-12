import React from 'react';
import classes from './BasketMobile.module.css'
import {useDispatch, useSelector} from "react-redux";
import edit from '../../img/editMobile.svg';
import del from '../../img/deleteMobile.svg';
import {useNavigate} from "react-router-dom";

const BasketItemMobile = ({item}) => {
    const hist = useNavigate();
    const road = useSelector(state => state.road)
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch();
    function delItem() {
            console.log(item.id);
            console.log(selected);
            dispatch({type: 'REMOVE_ITEM', payload: item});
    }
    return (
        <div className={classes.basket__item}>
            <div className={classes.basket__description}>
                <img src={item.image} alt=""/>
                <p>{item.description}</p>
                <button onClick={()=>hist('/edit/'+item.key)}><img src={edit} alt="edit"/></button>
                <button onClick={delItem}><img src={del} alt="delete"/></button>
            </div>
            <div className={classes.basket__options}>
                <div><p>Кол-во:</p><p>{item.quantity}</p></div>
                <div><p>Объем, м3</p><p>{item.volume}</p></div>
                <div><p>Масса Нетто, кг</p><p>{item.netto}</p></div>
                <div><p>Масса Брутто, кг</p><p>{item.brutto}</p></div>
                <div><p>Стоимость, {road.money}</p><p>{item.cost}</p></div>
            </div>
        </div>
    );
};

export default BasketItemMobile;