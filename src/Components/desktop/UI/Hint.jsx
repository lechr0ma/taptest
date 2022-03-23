/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const Hint = ({children, style}) => {
    const currentStyle = css(`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #FFFFFF;
        box-shadow: 0 4px 40px rgba(93, 170, 255, 0.1);
        border-radius: 3px;
        font-family: "Open Sans", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 23px;
        color: #5DAAFF;
        & p{
            max-width: 80%;
        }
    ` + css(style).styles)
    return (
        <div css={currentStyle}>
            {children}
        </div>
    );
};

export default Hint;