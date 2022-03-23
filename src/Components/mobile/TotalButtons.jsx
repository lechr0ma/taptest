/** @jsxImportSource @emotion/react */
import React from 'react';
import BlueButton from "./UI/button/BlueButton";
import TrButton from "./UI/button/TrButton";
import {css} from "@emotion/react";
import {useNavigate} from "react-router-dom";

const TotalButtons = ({options}) => {
    const hist = useNavigate();
    const divCss = css(`
            font-family: "Open Sans", serif;
            font-style: normal;
            font-weight: 600;
            font-size: 23px;
            line-height: 23px;
            text-align: center;
            letter-spacing: .2px;
            color: #606F7A;
            display: flex;
            align-items: center;
            justify-content: space-between;`)
    return (
        <div css={css(`
                display: flex;
                flex-direction: column;
                width: 90%;
                margin-top: 50px;
        `)}>
            <div css={divCss}>
                <p>Итого</p>
                <p>{options.cost * 1.05 + 100 * options.volume} руб.</p>
            </div>
            <BlueButton variant='full' onClick={() => hist('/contacts')}>Связаться по доставке</BlueButton>
            <TrButton>Сохранить расчет  &rarr;</TrButton>
        </div>
    );
};

export default TotalButtons;