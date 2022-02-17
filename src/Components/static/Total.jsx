import React from 'react';
import classes from './Total.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Hint from "./Hint";

const Total = () => {
    const hist = useNavigate();
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
    items.forEach((e) => cost += +e.cost * +e.quantity * e.multiply);

    const hints = useSelector(state => state.hints);
    const dispatch = useDispatch();
    function resetSelected() {
        dispatch({type: 'RESET_SELECTED'});
        hist('/list');
    }
    function download() {
        let save = items;
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(save)));
        element.setAttribute('download', 'savedList');

        element.style.display = 'none';
        console.log(element);

        element.click();
    }
    return (
        <div className={classes.container}>
            <div className={classes.tableOptions}>
                <div className={classes.title}>Итого:</div>
                <div>{quantity} шт.</div>
                <div>{netto} кг. нетто</div>
                <div>{brutto} кг. брутто</div>
                <div>{volume} м3</div>
                <div>{cost} руб.</div>
                <div style={{color: '#5DAAFF', cursor:'pointer'}} onClick={resetSelected}>Сбросить</div>
            </div>
            <div className={classes.itemButtons}>
                <Link to='/list'><button className={classes.blue__btn}>Добавить</button></Link>
                <Link to='/load'><button className={classes.blue__btn}>Рассчитать</button></Link>
            </div>
            <div className={classes.totalCost}>
                <p>Стоимость доставки:</p>
                <p>{1000 * volume} руб.</p>
                <p>Таможенные платежи:</p>
                <p>{cost*0.01} руб</p>
                <p>Итого:</p>
                <p>{cost*1.01 + 1000*volume} руб.</p>
            </div>
            <div className={classes.totalButtons}>
                {hints[6] && <Hint
                            body='Свяжитесь с нами, чтобы узнать точную стоимость доставки'
                            arrow='down'
                            num={6}
                            style={{top: -65,
                                right: 0,
                                width: 600,
                                height: 55}}
                />
                }
                <button className={classes.white__btn} onClick={download}>Сохранить расчет   &rarr;</button>
                <button className={classes.blue__btn} style={{fontWeight: 600, width: 300}} onClick={()=>hist('/contacts')}>Связаться по доставке</button>
            </div>
        </div>
    );
};

export default Total;