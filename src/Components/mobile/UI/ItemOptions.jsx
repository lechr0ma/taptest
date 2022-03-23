/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from "../pages/BasketMobile.module.css";
import {useSelector} from "react-redux";
import {css} from "@emotion/react";

const ItemOptions = ({item}) => {
    const road = useSelector(state => state.road)
    const divStyle = css(`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
    `)
    return (
        <div className={classes.basket__options}>
            <div css={divStyle}>
                <span>
                    Кол-во:
                </span>
                <span>
                    {item.quantity}
                </span>
            </div>
            <div css={divStyle}>
                <span>
                    Объем, м3:
                </span>
                <span>
                    {item.volume}
                </span>
            </div>
            <div css={divStyle}>
                <span>
                    Масса Нетто, кг:
                </span>
                <span>
                    {item.netto}
                </span>
            </div>
            <div css={divStyle}>
                <span>
                    Масса Брутто, кг:
                </span>
                <span>
                    {item.brutto}
                </span>
            </div>
            <div css={divStyle}>
                <span>
                    Стоимость:
                </span>
                <span>
                    {item.cost}
                    {road.money}
                </span>
            </div>
        </div>
    );
};

export default ItemOptions;