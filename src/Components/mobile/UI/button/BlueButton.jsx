/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const BlueButton = ({children, onClick, variant, disabled}) => {
    let defaultStyle = `
        height: 60px;
        border: none;
        border-radius: 5px;
        background: ${disabled ? `#5daaff6b` : `#5DAAFF`};
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 17px;
        text-align: center;
        letter-spacing: .2px;
        color: #FFFFFF;
        cursor: pointer;
         &:active{
            opacity: .5;} `
    let full = `width: 100%; margin-top: 5px `;
    let half = 'width: 47% '
    let mini = `border: none;
        background: #5DAAFF;
        border-radius: 3px;
        height: 30px;
        width: 70px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
        letter-spacing: .2px;
        color: #FCFDFF;`
    let style;
    if (variant === 'full'){
        style = defaultStyle + full;
    } else if (variant === 'half'){
        style = defaultStyle + half;
    } else if (variant === 'mini') {
        style = defaultStyle + mini;
    } else {
        style = defaultStyle;
    }
    return (
        <button
            onClick={onClick}
            css={css(style)}
        >
            {children}
        </button>
    );
};

export default BlueButton;