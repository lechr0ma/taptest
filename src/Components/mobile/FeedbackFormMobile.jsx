import React, {useState} from 'react';
import classes from './feedbackForm.module.css'
import close from '../../img/close.svg'
import {useNavigate} from "react-router-dom";
import ImageButton from "./UI/button/ImageButton";
import BlueButton from "./UI/button/BlueButton";
import FeedbackInputs from "./FeedbackInputs";

const FeedbackFormMobile = () => {
    const hist = useNavigate();
    const [hint, setHint] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        tel: '',
        email: ''
    });

    function getHint() {
        let name = /^\p{Alpha}+$/gu.test(inputs.name.trim())
        name ? inputs.tel.trim().length > 7 ? inputs.email.trim().includes('@') ? hist('/sended') : setHint('email')
            : setHint('Телефон')
            : setHint('Имя')
    }

    return (
        <div className='mobile__feedback'>
            <div className={classes.header}>
                <ImageButton
                    onClick={() => hist(-1)}
                    image={close}
                    alt='Close'
                />
            </div>
            <div className={classes.title}>
                Связаться по доставке.
            </div>
            <FeedbackInputs inputs={inputs} setInputs={setInputs} hint={hint}/>
            <div className={classes.ask}>
                <p>Опишите ваш вопрос</p>
                <textarea name="ask" id="ask" rows="10"/>
            </div>
            <div className={classes.submit}>
                <BlueButton variant='full' onClick={getHint}>Связаться по доставке</BlueButton>
                <p>
                    <span> Нажимая на кнопку, вы даете </span>
                    <a className={classes.submit__link} href='#'>согласие на обработку</a>
                    <span> своих персональных данных</span>
                </p>
            </div>

        </div>
    );
};

export default FeedbackFormMobile;