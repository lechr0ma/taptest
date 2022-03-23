/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P23 = ({children, style}) => {
    return (
        <p css={css(`
            font-family: "Open Sans",serif;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 23px;
            letter-spacing: .2px;
            color: #606F7A;
            ` + css(style).styles)}>
            {children}
        </p>
    );
};

export default P23;