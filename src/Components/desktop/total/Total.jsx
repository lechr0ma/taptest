import React from 'react';
import classes from './Total.module.css';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import GlobalHint from "../UI/GlobalHint";
import BlueButton from "../UI/button/BlueButton";
import TransparentButton from "../UI/button/TransparentButton";
import P23 from "../UI/P/P23";
import TotalTable from "./TotalTable";

const Total = () => {
    const hist = useNavigate();
    const items = useSelector(state => state.selected);
    const hints = useSelector(state => state.hints);

    let cost = 0;
    let volume = 0;

    items.forEach((e) => volume += +e.volume);
    items.forEach((e) => cost += +e.cost * +e.quantity * e.multiply);

    function download() {
        let save = items;
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(save)));
        element.setAttribute('download', 'savedList');
        element.style.display = 'none';
        element.click();
    }

    return (
        <div className='total'>
            <TotalTable/>
            <div className={classes.itemButtons}>
                <BlueButton
                    onClick={() => hist('/list')}
                    style={{width: 200, height: 55, marginLeft: 12}}
                >
                    Добавить
                </BlueButton>
                <BlueButton
                    onClick={() => hist('/load')}
                    style={{width: 200, height: 55, marginLeft: 12}}
                >
                    Рассчитать
                </BlueButton>
            </div>
            <div className={classes.totalCost}>
                <P23 style={{width: '49%', textAlign: 'right'}}>Стоимость доставки:</P23>
                <P23 style={{width: '49%', textAlign: 'right'}}>{1000 * volume} руб.</P23>
                <P23 style={{width: '49%', textAlign: 'right'}}>Таможенные платежи:</P23>
                <P23 style={{width: '49%', textAlign: 'right'}}>{cost * 0.01} руб</P23>
                <P23 style={{width: '49%', textAlign: 'right'}}>Итого:</P23>
                <P23 style={{width: '49%', textAlign: 'right'}}>{cost * 1.01 + 1000 * volume} руб.</P23>
            </div>
            <div className={classes.totalButtons}>
                {hints[6] &&
                <GlobalHint
                    body='Свяжитесь с нами, чтобы узнать точную стоимость доставки'
                    arrow='down'
                    num={6}
                    style={{
                        top: -65,
                        right: 0,
                        width: 600,
                        height: 55
                    }}
                />
                }
                <TransparentButton
                    onClick={download}
                    width='240px'
                    height='55px'
                >
                    Сохранить расчет   &rarr;
                </TransparentButton>
                <BlueButton
                    style={{width: 300, height: 55, marginLeft: 12}}
                    onClick={() => hist('/contacts')}
                >
                    Связаться по доставке
                </BlueButton>
            </div>
        </div>
    );
};

export default Total;