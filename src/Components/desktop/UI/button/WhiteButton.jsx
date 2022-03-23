/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const WhiteButton = ({width, height, children, onClick, ...props}) => {
    return (
        <button
            css={css(`
                        width: ${width};
                        height: ${height};
                        border: 0;
                        background: #FFFFFF;
                        box-shadow: 0 4px 40px rgba(46, 80, 87, 0.12);
                        border-radius: 3px;
                        font-family: "Open Sans", sans-serif;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 17px;
                        line-height: 17px;
                        color: #606F7A;
                        letter-spacing: .2px;
                        cursor: pointer;
                        &:hover {
                            background: #5DAAFF;
                            color: #FFFFFF
                                }
             `)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default WhiteButton;