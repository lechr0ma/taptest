/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const TotalOptions = ({options}) => {
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
                width: 90%;`)}>
            <div css={divCss}>
                <p>Общая масса Нетто, кг</p>
                <p>{options.netto}</p>
            </div>
            <div css={divCss}>
                <p>Общая масса Брутто, кг</p>
                <p>{options.brutto}</p>
            </div>
            <div css={divCss}>
                <p>Общий объем, м3</p>
                <p>{options.volume}</p>
            </div>
            <div css={divCss}>
                <p>Общая стоимость, руб. </p>
                <p>{options.cost}</p>
            </div>
        </div>
    );
};

export default TotalOptions;