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
    items.forEach((e) => cost += +e.cost);

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
                <div>{quantity}</div>
                <div>{netto}</div>
                <div>{brutto}</div>
                <div>{volume}</div>
                <div>{cost}</div>
                <div onClick={resetSelected}>Очистить</div>
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
                <p>Итого:</p>
                <p>50000000</p>
            </div>
            <div className={classes.totalButtons}>
                {hints[6] && <Hint
                            body='Свяжитесь с нами, чтобы узнать точную стоимость доставки
                    &darr;'
                            num={6}
                            style={{top: -50,
                                right: 0,
                                width: 550,
                                height: 40}}
                />
                }
                <button className={classes.white__btn} onClick={download}>Сохранить расчет   &rarr;</button>
                <button className={classes.blue__btn} onClick={()=>hist('/contacts')}>Связаться по доставке</button>
            </div>
        </div>
    );
};

export default Total;