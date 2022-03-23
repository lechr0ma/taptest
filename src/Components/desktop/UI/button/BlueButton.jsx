/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const BlueButton = ({children, onClick, style}) => {
    return (
        <button
            css={css(`
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 17px;
                letter-spacing: 0.2px;
                color: #FFFFFF;
                border: 0;
                background: #5DAAFF;
                box-shadow: 0 4px 40px rgba(93, 170, 255, 0.29);
                border-radius: 3px;
                cursor: pointer;
                &:hover {
                    background: #2876CC;
                 }`
                + css(style).styles) }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BlueButton;