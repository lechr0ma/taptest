/** @jsxImportSource @emotion/react */
import React from 'react';
import OptionsList from "../OptionsList";
import {css} from "@emotion/react";

const MainInput = ({defaultValue, onChange, options, className, variant, ...props}) => {
    const headerCss = css(`
                    width: 100px;
                    border: 0;
                    padding: 0;
                    text-align: center;
                    background: #FFFFFF;
                    height: 100%;
                    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
                    border-radius: 5px;
                    font-family: Roboto, sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 10px;
                    color: #606F7A;
                    `)
    const fullCss = css(`
                    padding: 0 2px;
                    position: relative;
                    text-align: center;
                    width: 160px;
                    height: 85px;
                    border: 0;
                    background: #FFFFFF;
                    color: #606F7A;
                    font-family: Roboto, serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15px;
                    line-height: 15px;
                    `)
    let style;
    if (variant === 'full') {
        style = fullCss;
    }
    if (variant === 'header') {
        style = headerCss;
    }

    return (
        <div css={css`
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;
            `}>
            <input css={style}
                   {...props}
                   defaultValue={defaultValue}
                   onChange={onChange}
            />
            <OptionsList variant={variant} className={className} options={options}/>
        </div>
    );
};

export default MainInput;