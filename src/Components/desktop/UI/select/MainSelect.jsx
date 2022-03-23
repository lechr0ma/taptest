/** @jsxImportSource @emotion/react */
import React from 'react';
import sel from "../../../../img/selectarr.svg";
import OptionsList from "../OptionsList";
import {css} from "@emotion/react";

const MainSelect = ({value, onClick, list, className, variant}) => {
    const headerCss = css(`
            position: relative;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: space-around;
            padding: 0;
            text-align: center;
            background: #FFFFFF;
            height: 100%;
            width: 125px;
            box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
            border-radius: 5px;
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 10px;
            color: #606F7A;
            cursor: pointer;
            `)
    const fullCss = css(`
            position: relative;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: space-around;
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
            cursor: pointer;
                    `)
    let style;
    if (variant === 'full') {
        style = fullCss;
    }
    if (variant === 'header') {
        style = headerCss
    }
    return (
        <div
            css={style}
            onClick={onClick}>
            {value}
            <img className='arrow' src={sel} alt="arrow"/>
            <OptionsList variant={variant} className={className} options={list}/>
        </div>
    );
};

export default MainSelect;