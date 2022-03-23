/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const CounterButton = ({onClick, children}) => {
    return (
        <button css={css(`
                width: 53px;
                height: 53px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                border-radius: 0 3px 3px 0;
                border: 0;
                color: #5DAAFF;
                font-size: 30px;
                cursor: pointer;
                `)}
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CounterButton;