import React from 'react';
import classes from "./ContactsPage.module.css";
import {useNavigate} from "react-router-dom";
import rwarr from '../../img/brwarr.svg'


const FeedbackSended = () => {
    const hist = useNavigate();
    return (
        <div>
            <div className={classes.feedbackSended}>
                <h1>Спасибо за заявку!</h1>
                <p>Мы свяжемся с вами в ближайшее время.</p>
                <div className={classes.btns}>
                    <button onClick={()=>hist('/contacts')}>К контактам <img style={{marginLeft: 10}} src={rwarr} alt="rightarrow"/></button>
                    <button onClick={()=> hist('/')}>На главную <img style={{marginLeft: 10}} src={rwarr} alt="rightarrow"/></button>
                </div>
                </div>

        </div>
    );
};

export default FeedbackSended;