/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P17 = ({children, ...props}) => {
    return (
        <p css={css`
            font-family: "Open Sans",serif;
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 17px;
            letter-spacing: .2px;
            color: #606F7A;
            `}
           {...props}
        >
            {children}
        </p>
    );
};

export default P17;