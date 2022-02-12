import React, {useState} from 'react';
import classes from "./mainStyle.module.css";
import img from "../../img/logo.png";
import close from "../../img/close.svg";
import facebook from "../../img/FacebookMobile.svg";
import ig from "../../img/instagramMobile.svg";
import wa from "../../img/WhatsappMobile.svg";
import wc from "../../img/WechatMobile.svg";
import {Transition} from "react-transition-group";
import {useNavigate} from "react-router-dom";
import './trans.css'

const LeftMenu = ({show, rem}) => {
    const hist = useNavigate();
    return (
        <Transition in={show} timeout={500}>
            {state =>
        <div className={[classes.feedback , state].join(' ')}>
            <div className={classes.menuHeader}>
                <img src={img} alt='logo'/>
                <button onClick={rem}><img src={close} alt='menu'/></button>
            </div>
            <div className={classes.contacts}>
                <p>asia@baikalvl.ru</p>
                <p>8 800 201-87-77</p>
                <button className={classes.whiteButton} onClick={()=>hist('/feedback')}>Связаться</button>
            </div>
            <div className={classes.media}>
                <p>Мы в соц. сетях:</p>
                <div className={classes.media_icons}>
                    <img src={facebook} alt="facebook"/>
                    <img src={ig} alt="instagram"/>
                    <img src={wa} alt="whatsapp"/>
                    <img src={wc} alt="wechat"/>
                </div>
            </div>
        </div>}
        </Transition>
    );
};

export default LeftMenu;