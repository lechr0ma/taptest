/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const OptionInput = ({select, setSelect, option, title, type, style}) => {
    return (
        <input
            css={css(`
                width: 100%;
                height: 60px;
                border: none;
                border-radius: 5px;
                padding: 0 10px ;
                box-sizing: border-box;
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 15px;
                letter-spacing: -.2px;
                margin-top: 10px;
                &::placeholder{
                    color: #B7B7B7;
                }
                &:focus{
                 outline:  4px solid #e0eefd;
                }
            `+ css(style).styles)}
            value={select[option]}
            onChange={e => setSelect({...select, [option]: e.target.value} )}
            type={type}
            placeholder={title}
        />
    );
};

export default OptionInput;