import React from 'react';
import classes from './Basket.module.css';
import SelectedItems from "../static/SelectedItems";
import {useSelector} from "react-redux";
import Hint from "../static/Hint";

const Basket = () => {
    const selected = useSelector(state => state.selected);
    const hints = useSelector(state => state.hints);
    const road = useSelector(state => state.road);

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Добавленная мебель ({selected.length})</h1>
                {hints[3] && <Hint
                            body='Чтобы отредактировать  введенные ланные, просто нажмите на поле'
                            num={3}
                            style={{width: 600,
                                height: 40,
                                left: 550}}
                />
                }
            </div>
            <div className={classes.table}>
                <div className={classes.tableOptions}>
                    <div>Кол-во</div>
                    <div>Общая масса нетто, кг</div>
                    <div>Общая масса брутто, кг</div>
                    <div>Общий объем, м3</div>
                    <div>Стоимость единицы, {road.money}</div>
                    <div>Удалить</div>
                </div>
                <SelectedItems/>
            </div>
        </div>
    );
};

export default Basket;