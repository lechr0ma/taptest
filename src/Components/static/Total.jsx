import React from 'react';
import classes from './Total.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Total = () => {
    const items = useSelector(state => state.selected);
    let quantity = 0;
    let cost = 0;
    let volume = 0;
    let netto = 0;
    let brutto =0;
    items.forEach((e) => quantity += +e.quantity);
    items.forEach((e) => netto += +e.netto);
    items.forEach((e) => brutto += +e.brutto);
    items.forEach((e) => volume += +e.volume);
    items.forEach((e) => cost += +e.cost);

    const hints = useSelector(state => state.hints);
    const dispatch = useDispatch();
    function setHint() {
        dispatch({type:'SET_HINT', payload: 6})
    }

    return (
        <div className={classes.container}>
            <div className={classes.tableOptions}>
                <div>{quantity}</div>
                <div>{netto}</div>
                <div>{brutto}</div>
                <div>{volume}</div>
                <div>{cost}</div>
                <div>Очистить</div>
            </div>
            <div className={classes.itemButtons}>
                <Link to='/list'><button className={classes.blue__btn}>Добавить</button></Link>
                <Link to='/load'><button className={classes.blue__btn}>Рассчитать</button></Link>
            </div>
            <div className={classes.totalCost}>
                <p>Стоимость доставки:</p>
                <p>10000000руб</p>
                <p>Таможенные платежи:</p>
                <p>5000000руб</p>
                <p><h2>Итого:</h2></p>
                <p><h2>50000000</h2></p>
            </div>
            <div className={classes.totalButtons}>
                {hints[6] && <div className={classes.hint}>
                    <button onClick={setHint}>&#215;</button>
                    Свяжитесь с нами, чтобы узнать точную стоимость доставки
                    <h2>&darr;</h2>
                    </div>}
                <button className={classes.white__btn}>Сохранить расчет   &rarr;</button>
                <button className={classes.blue__btn}>Связаться по доставке</button>
            </div>
        </div>
    );
};

export default Total;