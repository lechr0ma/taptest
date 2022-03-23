/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import Option from "./Option";

const OptionsList = ({variant, options, className}) => {
    let position;
    if (variant ==='header'){
        position = 'top: 42px; max-height: 86px;'
    }
    if (variant === 'full'){
        position = 'max-height: 142px; top: 85px;'
    }

    return (
        <div
            css={css`
                position: absolute;
                ${className && 'height: 0;'}
                background: #FFFFFF;
                width: 100%;
                border-radius: 5px;
                overflow: auto;
                ${position}
                transition: height .2s ease;
                z-index: 99;
                &::-webkit-scrollbar{
                    width:2px;
                }
                &::-webkit-scrollbar-thumb{
                    background-color: #606F7A;
                    border-radius:5px;
                }
                &.active {
                    height: 210px;
                    scroll-behavior: auto;
                }
            `}
            className={className}
        >
            {options.length > 0 &&
                options.map( e=> <Option variant={variant} onClick={e.onclick} children={e.value} key={e.value}/>)

            }
        </div>
    );
};

export default OptionsList;