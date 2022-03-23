import React from 'react';
import {useNavigate} from "react-router-dom";
import ok from '../../../img/okFeed.svg'
import classes from "../feedbackForm.module.css";
import ImageButton from "../UI/button/ImageButton";
import close from "../../../img/close.svg";

const SendedMobile = () => {
    const hist = useNavigate();
    return (
        <div className='mobile__sended'>
            <div className={classes.header}>
                <ImageButton
                    onClick={() => hist(-2)}
                    image={close}
                    alt='Close'
                />
            </div>
            <div className={classes.body}>
                <img className={classes.body__img} src={ok} alt="ok"/>
                <p className={classes.body__thx}>Спасибо за заявку!</p>
                <div>Мы свяжемся с вами в ближайшее время.</div>
            </div>
        </div>
    );
};

export default SendedMobile;