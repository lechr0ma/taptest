import React from 'react';
import classes from './Basket.module.css';
import SelectedItems from "../static/SelectedItems";
import {useDispatch, useSelector} from "react-redux";

const Basket = () => {
    const selected =useSelector(state => state.selected);
    const hints = useSelector(state => state.hints);
    const dispatch = useDispatch();
    function setHint() {
        dispatch({type:'SET_HINT', payload: 3})
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Добавленная мебель ({selected.length})</h1>
                {hints[3] && <div className={classes.hint}>
                    <button className={classes.redCross} onClick={setHint}>&#215;</button>
                    <p>Чтобы отредактировать  введенные ланные, просто нажмите на поле</p>
                </div>}
            </div>
            <div className={classes.table}>
                <div className={classes.tableOptions}>
                    <div>Кол-во</div>
                    <div>Общая масса нетто, кг</div>
                    <div>Общая масса брутто, кг</div>
                    <div>Общий объем, м3</div>
                    <div>Стоимость единицы</div>
                    <div>Удалить</div>
                </div>
                <SelectedItems/>
            </div>
        </div>
    );
};

export default Basket;