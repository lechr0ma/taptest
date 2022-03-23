/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P15 = ({children}) => {
    return (
        <p css={css(`
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 15px;
            line-height: 15px;
            min-width: 160px;
            padding-left: 10px;
            letter-spacing: -1px;
            color: #B7B7B7;
        `)}>
            {children}
        </p>
    );
};

export default P15;