/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "../pages/BasketMobile.module.css";
import noitem from "../../../img/noitem.svg";
import BlueButton from "./button/BlueButton";
import {useNavigate} from "react-router-dom";
import {css} from "@emotion/react";

const NoItem = () => {
    const hist = useNavigate();
    return (
        <div className={classes.noitem}>
            <img src={noitem} alt="0 items"/>
            <p css={css(`
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
                text-align: center;
                letter-spacing: .2px;
                color: #606F7A;
                `)}
            >
                Вы не добавили ни одного элемента.
            </p>
            <BlueButton
                onClick={() => hist('/list')}
                variant='half'
            >
                Добавить
            </BlueButton>
        </div>
    );
};

export default NoItem;