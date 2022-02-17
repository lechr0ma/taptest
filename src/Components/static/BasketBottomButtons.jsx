import React from 'react';
import classes from "../main/Basket.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Hint from "./Hint";

const BasketBottomButtons = () => {
    const hints = useSelector(state => state.hints)
    return (
        <div className={classes.bottom__btns}>
            <Link to='/list'>
                <button
                    className={classes.blue__btn}
                >
                    Добавить
                </button>
            </Link>
            <Link to='/load'>
                <button
                    className={classes.blue__btn}
                >
                    Рассчитать
                </button>
            </Link>
            {hints[5] && <Hint
                body='Узнайте стоимость доставки, нажав на кнопку “Рассчитать”'
                num={5}
                arrow='down'
                style={{bottom:'130%', right: 0 , width: 590, height: 55}}
            />

            }
            {hints[4] && <Hint
                body='Через кнопку “Добавить” Вы можете добавлять еще элементы'
                num={4}
                arrow='right'
                style={{bottom: 0, right: '100%', width: 610,height: 55}}/>
            }
        </div>
    );
};

export default BasketBottomButtons;