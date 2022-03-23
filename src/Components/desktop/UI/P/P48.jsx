/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P48 = ({children, ...props}) => {
    return (
        <p css={css`
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 30px;
            color: #606F7A;
            `}
           {...props}
        >
            {children}
        </p>
    );
};

export default P48;