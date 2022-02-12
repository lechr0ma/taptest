import React from 'react';
import cl from "./sendedMobile.module.css";
import {useNavigate} from "react-router-dom";
import close from "../../img/close.svg";
import ok from '../../img/okFeed.svg'

const Sended = () => {
    const hist = useNavigate();
    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <button onClick={()=>hist(-2)}><img src={close} alt="close"/></button>
            </div>
            <div className={cl.body}>
                <img src={ok} alt="ok"/>
                <p>Спасибо за заявку!</p>
                <div>Мы свяжемся с вами в ближайшее время.</div>
            </div>


        </div>
    );
};

export default Sended;