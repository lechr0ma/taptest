/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const WhiteButton = ({children, onClick}) => {

    return (
        <button
            css={css`
            width: 70%;
            height: 45px;
            font-family: "Open Sans",sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 17px;
            letter-spacing: .2px;
            color: #606F7A;
            background: #FFFFFF;
            box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
            border-radius: 3px;
            border: 0; 
            cursor: pointer;
            &:hover{
                background: #5DAAFF;
                color: #FFFFFF
            }
            `}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default WhiteButton;