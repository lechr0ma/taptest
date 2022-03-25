/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "./ItemsPage.module.css";
import {css} from "@emotion/react";
import CounterButton from "../UI/button/CounterButton";

const Counter = ({currentItem, setItem}) => {
    const pCss = css(`
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 0.2px;
            color: #606F7A;`)
    const divCss = css(`
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 17px;
            background: #FFFFFF;
            box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
            width: 53px;
            height: 53px;
            display: flex;
            justify-content: center;
            align-items: center;`)

    return (
        <div className={classes.options__quantity}>
            <p css={pCss}>Кол-во:</p>
            <div className={classes.quantity__counter}>
                <CounterButton
                    onClick={() => {
                        if (currentItem.quantity !== 1) {
                            setItem({...currentItem, quantity: currentItem.quantity - 1})
                        }
                    }}>
                    &#8722;
                </CounterButton>
                <div css={divCss}>
                    <p css={pCss}>{currentItem.quantity}</p>
                </div>
                <CounterButton
                    onClick={() => setItem({...currentItem, quantity: currentItem.quantity + 1})}
                >
                    &#43;
                </CounterButton>
            </div>
        </div>
    );
};

export default Counter;