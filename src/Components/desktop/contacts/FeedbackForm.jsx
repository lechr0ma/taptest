import React, {useState} from 'react';
import classes from './ContactsPage.module.css';
import {useNavigate} from 'react-router-dom';
import larr from '../../../img/leftarr.svg'
import OptionsInput from "../../all/OptionsInput";
import TextField from "../UI/TextField";
import BlueButton from "../UI/button/BlueButton";
import P17 from "../UI/P/P17";

const FeedbackForm = () => {
    const [noitem, setItem] = useState('')
    const hist = useNavigate();

    function error() {
        let inputs = document.getElementsByTagName('input');
        let name = !!inputs[0].value && inputs[0].value.replace(/[\p{Alpha}-]/gu, '').length === 0
        let email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs[1].value)
        let phone = inputs[2].value.length > 6 && inputs[2].value.replace(/[\d+()]/g, '').length === 0
        name ? email ? phone ? hist('/sended')
            :
            setItem(<div className={classes.err}>* Заполните поле телефон, минимум 6 символов.</div>)
            :
            setItem(<div className={classes.err}>* Заполните поле e-mail.</div>)
            :
            setItem(<div className={classes.err}>* Заполните поле Имя.</div>)


    }

    return (
        <div className={classes.feedBack__container}>
            <div className={classes.input__info}>
                <OptionsInput
                    type="text"
                    placeholder='Имя'
                    variant='feedback'
                />
                <OptionsInput
                    type="email"
                    placeholder="e-mail"
                    variant='feedback'
                />
                <OptionsInput
                    type="tel"
                    placeholder="Телефон"
                    variant='feedback'
                />
            </div>
            {noitem}
            <div className={classes.input__data}>
                <P17>Опишите Ваш вопрос</P17>
                <TextField/>
                <BlueButton
                    onClick={error}
                    width='262px'
                    height='55px'
                    style={{width: 262, height: 55, marginTop: 20}}
                >
                    Связаться по доставке
                </BlueButton>
                <P17>
                    Нажимая на кнопку, вы даете
                    <a href='#'>согласие на обработку</a>
                    своих персональных данных
                </P17>
            </div>
            <button onClick={() => hist(-1)} className={classes.back}>
                <img src={larr} alt="arrow"/>
                Назад
            </button>
        </div>
    );
};

export default FeedbackForm;