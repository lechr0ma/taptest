/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const TotalFees = ({options}) => {
    const divCss = css(`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `)
    return (
        <div css={css(`
                margin-top: 30px;
                font-family: "Open Sans", serif;
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 17px;
                letter-spacing: .2px;
                color: #606F7A;
                display: flex;
                flex-direction: column;
                width: 90%;
        `)}>
            <div css={divCss}>
                <p>Стоимость доставки</p>
                <p>{100 * options.volume} руб.</p>
            </div>
            <div css={divCss}>
                <p>Таможенные платежи</p>
                <p>{options.cost / 20} руб.</p>
            </div>
        </div>
    );
};

export default TotalFees;