/** @jsxImportSource @emotion/react */
import React from 'react';

import {useDispatch} from "react-redux";
import darr from '../../../img/downarr.svg'
import uarr from '../../../img/uparr.svg'
import larr from '../../../img/leftarr.svg'
import rarr from '../../../img/rightarr.svg'
import RedCross from "./button/RedCross";
import {css} from "@emotion/react";

const GlobalHint = ({num, body, style, arrow}) => {
    const dispatch = useDispatch();

    function setHint(n) {
        dispatch({type: 'SET_HINT', payload: n})
    }

    let propsStyle = css(style)
    let defaultStyle = css(`
        box-sizing: border-box;
        border-radius: 10px;
        padding: 20px;
        position: absolute;
        background: #FFFFFF;
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: .2px;
        justify-content: space-between;
        color: #5DAAFF;
        box-shadow: 0 4px 40px rgba(93, 170, 255, 0.1); 
        ` + propsStyle.styles)
    return (
        <div
            css={defaultStyle}
        >
            <RedCross
                variant='hint'
                onClick={() => setHint(num)}
            />
            <p>{body}</p>
            <p>
                {arrow === 'left' && <img src={larr} alt="arrow"/>}
                {arrow === 'right' && <img src={rarr} alt="arrow"/>}
                {arrow === 'up' && <img src={uarr} alt="arrow"/>}
                {arrow === 'down' && <img src={darr} alt="arrow"/>}
            </p>
        </div>

    );
};

export default GlobalHint;