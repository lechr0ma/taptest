import React, {useState} from 'react';
import classes from './FeedbackForm.module.css';
import {useNavigate} from 'react-router-dom';


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


        console.log(email)
    }
    return (
        <div className={classes.container}>
            <div className={classes.input__info}>
                <input type="text" placeholder='Имя'/>
                <input type="email" placeholder="e-mail"/>
                <input type="tel" placeholder="Телефон"/>
            </div>
            {noitem}
            <div className={classes.input__data}>
                <p>Опишите Ваш вопрос</p>
                <textarea></textarea>
                    <button type='submit' onClick={error}>Связаться по доставке</button>
                <p>Нажимая на кнопку, вы даете <a href='#' >согласие на обработку</a> своих персональных данных</p>
            </div>
            <button onClick={()=>hist(-1)} className={classes.back}>&larr; Назад</button>
        </div>
    );
};

export default FeedbackForm;