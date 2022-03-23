/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const TrButton = ({children, onClick}) => {
    return (
        <button css={css(`
                width: 100%;
                height: 60px;
                border: 1px solid #5DAAFF;
                border-radius: 5px;
                background: inherit;
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 17px;
                text-align: center;
                letter-spacing: .2px;
                color: #5DAAFF ;
                margin-top: 10px;
                cursor: pointer;
                `)}
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default TrButton;