/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const Option = ({variant, onClick, children}) => {
    let height;
    if (variant === 'full' ){
        height = '70px'
    }
    if (variant === 'header'){
        height = '42px'
    }
    return (
        <div css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${height};
        color: #606F7A;
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        border-top: 1px solid #EBEBEB;
        &:hover {
            color: #FFFFFF;
            background: #2876CC;
            cursor: pointer;
        }
        `}
             onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Option;