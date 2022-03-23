/** @jsxImportSource @emotion/react */
import React from 'react';
import {useSelector} from "react-redux";
import {css} from "@emotion/react";

const BasketColumns = () => {
    const road = useSelector(state => state.road)
    const style = css(`
        display: flex;
        align-self: flex-end;
        width: 70%;
        height: 80px;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 10px;
        & div{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: #F8FAFF;
            border-right: 2px solid #E2E4EA;
            width: 18%;
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 14px;
            color: #606F7A;
            letter-spacing: -1px;
        }
    `)
    return (
        <div css={style}>
            <div>Кол-во</div>
            <div>Общая масса нетто, кг</div>
            <div>Общая масса брутто, кг</div>
            <div>Общий объем, м3</div>
            <div>Стоимость единицы, {road.money}</div>
            <div>Удалить</div>
        </div>
    );
};

export default BasketColumns;