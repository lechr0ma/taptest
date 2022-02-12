import React from 'react';
import classes from "../main/Basket.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const BasketBottomButtons = () => {
    const hints = useSelector(state => state.hints);
    const dispatch = useDispatch();
    function setHint(num) {
        dispatch({type:'SET_HINT', payload: num})
    }
    return (
        <div className={classes.bottom__btns}>
            <Link to='/list'><button className={classes.blue__btn}>Добавить</button></Link>
            <Link to='/load'><button className={classes.blue__btn}>Рассчитать</button></Link>
            {hints[5] && <div className={classes.hint__add}><button className={classes.redCross}onClick={()=>setHint(5)}>&#215;</button>
                <p>Узнайте стоимость доставки, нажав на кнопку “Рассчитать”&darr;</p></div>}
            {hints[4] && <div className={classes.hint__reset}><button className={classes.redCross} onClick={()=>setHint(4)}>&#215;</button>
                <p>Через кнопку “Добавить” Вы можете добавлять еще элементы &rarr;</p></div>}
        </div>
    );
};

export default BasketBottomButtons;