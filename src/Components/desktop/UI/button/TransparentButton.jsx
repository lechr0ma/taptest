/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";


const TransparentButton = ({width, height, children, onClick}) => {
    return (
        <button
            css={css(`
                border: 1.5px solid #5DAAFF;
                background: inherit;
                box-shadow: 0 4px 40px rgba(46, 80, 87, 0.12);
                border-radius: 3px;
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 17px;
                line-height: 17px;
                color: #5DAAFF;
                letter-spacing: .2px;
                width: ${width};
                height: ${height};
                cursor: pointer;
                &:hover{
                    background: #5DAAFF;
                    color: #FFFFFF
                }`
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default TransparentButton;