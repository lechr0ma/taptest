/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "./ContactsPage.module.css";
import {useNavigate} from "react-router-dom";
import rwarr from '../../../img/brwarr.svg'
import {css} from "@emotion/react";
import P48 from "../UI/P/P48";
import P36 from "../UI/P/P36";
import BlueButton from "../UI/button/BlueButton";


const FeedbackSended = () => {
    const hist = useNavigate();
    return (
        <div>
            <div className='sended'>
                <P48 css={css({fontWeight: 600, margin: 0})}>
                    Спасибо за заявку!
                </P48>
                <P36 css={css({maxWidth: 900})}>
                    Мы свяжемся с вами в ближайшее время.
                </P36>
                <div className={classes.btns}>
                    <BlueButton
                        onClick={() => hist('/contacts')}
                        style={{width: 300, height: 55}}
                    >
                        К контактам
                        <img css={css({marginLeft: 10})} src={rwarr} alt="rightarrow"/>
                    </BlueButton>
                    <BlueButton
                        onClick={() => hist('/')}
                        style={{width: 300, height: 55, marginLeft: 50}}
                    >
                        На главную
                        <img css={css({marginLeft: 10})} src={rwarr} alt="rightarrow"/>
                    </BlueButton>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSended;