import React from 'react';
import classes from './BasketMobile.module.css'
import {useDispatch, useSelector} from "react-redux";
import edit from '../../img/editMobile.svg';
import del from '../../img/deleteMobile.svg';
import {Navigate, useNavigate} from "react-router-dom";

const BasketItemMobile = ({item}) => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const hist = useNavigate();
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch();
    function delItem() {
        console.log(item.id);
        console.log(selected);
        dispatch({type: 'REMOVE_ITEM', payload: item});
    }
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
        return (
        <div className={classes.basket__item}>
            <div className={classes.basket__description}>
                <img className={classes.photo} src={item.image} alt="Диван"/>
                <p>{item.description}</p>
                <button onClick={()=>hist('/edit/'+item.key)}><img src={edit} alt="edit"/></button>
                <button onClick={delItem}><img src={del} alt="delete"/></button>
            </div>
            <div className={classes.basket__options}>
                <div><span>Кол-во:</span><span>{item.quantity}</span></div>
                <div><span>Объем, м3:</span><span>{item.volume}</span></div>
                <div><span>Масса Нетто, кг:</span><span>{item.netto}</span></div>
                <div><span>Масса Брутто, кг:</span><span>{item.brutto}</span></div>
                <div><span>Стоимость:</span><span>{item.cost} {road.money}</span></div>
            </div>
        </div>
    );
}};

export default BasketItemMobile;