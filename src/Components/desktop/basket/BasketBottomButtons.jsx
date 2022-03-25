import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import GlobalHint from "../UI/GlobalHint";
import BlueButton from "../UI/button/BlueButton";

const BasketBottomButtons = () => {
    const hints = useSelector(state => state.hints);
    const hist = useNavigate();
    return (
        <section className='basket__buttons'>
            <BlueButton
                style={{width: 200, height: 55, marginLeft: 12}}
                onClick={() => hist('/list')}
            >
                Добавить
            </BlueButton>
            <BlueButton
                style={{width: 200, height: 55, marginLeft: 12}}
                onClick={() => hist('/load')}
            >
                Рассчитать
            </BlueButton>
            {hints[5] &&
            <GlobalHint
                body='Узнайте стоимость доставки, нажав на кнопку “Рассчитать”'
                num={5}
                arrow='down'
                style={{bottom: '130%', right: 0, width: 590, height: 55}}
            />
            }
            {hints[4] &&
            <GlobalHint
                body='Через кнопку “Добавить” Вы можете добавлять еще элементы'
                num={4}
                arrow='right'
                style={{bottom: 0, right: '100%', width: 610, height: 55}}
            />
            }
        </section>
    );
};

export default BasketBottomButtons;