/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const P36 = ({children, ...props}) => {
    return (
        <p css={css(`
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 48px;
            max-width: 600px;
            color: #606F7A;
            letter-spacing: -1px;
        `)}
           {...props}
        >
            {children}
        </p>
    );
};

export default P36;