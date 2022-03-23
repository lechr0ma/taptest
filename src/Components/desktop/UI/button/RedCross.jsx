/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const RedCross = ({onClick, variant}) => {
    let style;
    if (variant === 'basket'){
        style = css(`
        font-family: "Open Sans", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background: #fff;
        color: red;
        width: 15px;
        height: 15px;
        font-weight: 300;
        font-size: 50px;
        line-height: 17px;
        cursor:pointer;
        `)
    }
    if (variant === 'hint'){
        style = css(`
        font-family: "Open Sans", sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background: #fff;
        color: red;
        width: 15px;
        height: 15px;
        font-weight: 400;
        font-size: 30px;
        line-height: 17px;
        cursor:pointer;
        `)
    }
    return (
        <button
            css={style}
            onClick={onClick}
        >
            &#215;
        </button>
    );
};

export default RedCross;