/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "./ContactData.module.css";
import P36 from "../UI/P/P36";
import {css} from "@emotion/react";
import D23Roboto from "../UI/D23Roboto";

const Contacts = () => {
    return (
        <div className={classes.contacts}>
            <P36>Наши контакты:</P36>
            <div className={classes.contacts__container}>
                <D23Roboto>
                    Наша почта:
                </D23Roboto>
                <D23Roboto>
                    <a css={css(`color: #606F7A;`)} href="mailto:asia@baikalvl.ru">asia@baikalvl.ru</a>
                </D23Roboto>
                <D23Roboto>
                    Телефон:
                </D23Roboto>
                <D23Roboto>
                    <a css={css(`color: #606F7A;`)} href="tel:+78002018777">8 800 201-87-77</a>
                </D23Roboto>
            </div>
        </div>
    );
};

export default Contacts;