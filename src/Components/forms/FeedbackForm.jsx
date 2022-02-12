import React, {useState} from 'react';
import classes from './FeedbackForm.module.css';
import {useNavigate} from 'react-router-dom';


const FeedbackForm = () => {
    const [noitem, setItem] = useState('')
    const hist = useNavigate();
    function error() {
        let inputs = Array.from(document.getElementsByTagName('input')).filter(e => !e.value);
        if (inputs.length) {
            setItem(<div className={classes.err}>* Заполните поле {inputs[0].placeholder}.</div>)
        }else {
            setItem('');
            hist('/sended');
        }


    }
    return (
        <div className={classes.container}>
            <div className={classes.input__info}>
                <input type="text" placeholder='Имя и фамилия'/>
                <input type="email" placeholder="Почта"/>
                <input type="tel" placeholder="Телефон"/>
            </div>
            {noitem}
            <div className={classes.input__data}>
                <p>Опишите Ваш вопрос</p>
                <textarea></textarea>
                    <button onClick={error}>Связаться по доставке</button>
                <p>Нажимая на кнопку, вы даете <a href='#' >согласие на обработку</a> своих персональных данных</p>
            </div>
            <button onClick={()=>hist(-1)} className={classes.back}>&larr; Назад</button>
        </div>
    );
};

export default FeedbackForm;