import React from 'react';
import classes from './TotalMobile.module.css'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Header from "./Header";


const TotalMobile = () => {
    const road = useSelector(state => state.road);
    const selected = useSelector(state => state.selected);
    const hist =  useNavigate();
    let options = {
        volume:0,
        netto:0,
        brutto:0,
        cost:0};

    selected.forEach(e => {
        options.volume += e.volume*e.quantity;
        options.brutto += e.brutto*e.quantity;
        options.netto += e.netto*e.quantity;
        options.cost += e.cost*e.quantity});

    return (
        <div className={classes.container}>
            <Header goback={true}/>
            <div className={classes.road}>{road.from}&rarr;{road.to}, {road.money}</div>
            <div className={classes.options}>
                <div><p>Общая масса Нетто, кг</p><p>{options.netto}</p></div>
                <div><p>Общая масса Брутто, кг</p><p>{options.brutto}</p></div>
                <div><p>Общий объем, м3</p><p>{options.volume}</p></div>
                <div><p>Общая стоимость </p><p>{options.cost}</p></div>
            </div>
            <div className={classes.fees}>
                <div><p>Стоимость доставки</p><p>11111</p></div>
                <div><p>Таможенные платежи</p><p>2222</p></div>

            </div>
            <div className={classes.buttons}>
                <div><p>Итого</p><p>50000</p></div>
                <button className={classes.blue} onClick={()=> hist('/feedback')}>Связаться по доставке</button>
                <button className={classes.save}>Сохранить расчет  &rarr;</button>
            </div>
        </div>
    );
};

export default TotalMobile;