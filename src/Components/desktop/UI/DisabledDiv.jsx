/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const DisabledDiv = ({children}) => {
    return (
        <div css={css`
            position: relative;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: space-around;
            width: 160px;
            height: 85px;
            border: 0;
            background: #FFFFFF;
            color: #B7B7B7;
            font-family: Roboto, serif;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 15px;
        `}>
            {children}
        </div>
    );
};

export default DisabledDiv;