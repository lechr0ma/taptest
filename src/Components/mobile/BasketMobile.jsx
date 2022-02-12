import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import classes from './BasketMobile.module.css';
import noitem from '../../img/noitem.svg'
import menu from "../../img/Menu.svg";
import {useSelector} from "react-redux";
import BasketItemMobile from "./BasketItemMobile";
import Header from "./Header";

const BasketMobile = () => {
    const selected = useSelector(state => state.selected);
    const hist = useNavigate();
    return (
        <div className={classes.container}>
            <Header road={true}/>
            <div className={classes.title}>Выбранная мебель ({selected.length})</div>
            {selected.length > 0 ?
                <div className={classes.itemsList}>
                    {selected.map(element => <BasketItemMobile item={element}/>)}
                </div>

                :
                <div className={classes.noitem}>
                    <img src={noitem} alt="0 items"/>
                    <p>Вы не добавили ни одного элемента.</p>
                    <button onClick={() => hist('/list')}>Добавить</button>
                </div>
            }
            {selected.length > 0 && <div className={classes.basket__buttons}>
                <button onClick={()=> hist('/total')}>Расчитать</button>
                <button onClick={()=> hist('/list')}>Добавить</button>
            </div>}
        </div>

    );
};

export default BasketMobile;