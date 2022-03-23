/** @jsxImportSource @emotion/react */
import React from 'react';
import {useSelector} from "react-redux";
import {css} from "@emotion/react";

const HeaderBasket = () => {
    const selected = useSelector(state => state.selected)
    return (
        <div
            css={css(`
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 60px;
            background: inherit;
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 17px;
            color: #606F7A;`)}
        >
            Выбранные товары({selected.length})
        </div>
    );
};

export default HeaderBasket;