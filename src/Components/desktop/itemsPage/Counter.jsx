/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "./ItemsPage.module.css";
import {css} from "@emotion/react";
import CounterButton from "../UI/button/CounterButton";

const Counter = ({currentItem, setItem}) => {
    const p = css(`
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 0.2px;
            color: #606F7A;`)

    return (
        <div className={classes.quantity}>
            <p css={p}>Кол-во:</p>
            <div className={classes.quantity__counter}>
                <CounterButton
                    onClick={() => {
                        if (currentItem.quantity !== 1) {
                            setItem({...currentItem, quantity: currentItem.quantity - 1})
                        }
                    }}>
                    &#8722;
                </CounterButton>
                <div>
                    <p css={p}>{currentItem.quantity}</p>
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