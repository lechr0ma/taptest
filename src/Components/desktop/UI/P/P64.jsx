/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P64 = ({children}) => {
    return (
        <p css={css(`
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 48px;
        display: flex;
        align-items: center;
        letter-spacing: -1px;
        color: #606F7A;
        margin: 30px 0;
        `)}>
            {children}
        </p>
    );
};

export default P64;