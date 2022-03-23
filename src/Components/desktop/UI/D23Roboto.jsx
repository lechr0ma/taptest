/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const D23Roboto = ({children, style}) => {
    const currentStyle = css(`
            display: flex;
            align-items: center;
            gap: 24px;
            width: 45%;
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 23px;
            margin: 15px 20px 15px 0;
            ` + css(style).styles)
    return (
        <div css={currentStyle}>
            {children}
        </div>
    );
};

export default D23Roboto;