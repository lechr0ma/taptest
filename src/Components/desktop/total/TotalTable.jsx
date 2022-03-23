/** @jsxImportSource @emotion/react */
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {css} from "@emotion/react";

const TotalTable = () => {
    const dispatch = useDispatch();
    const hist = useNavigate();
    const items = useSelector(state => state.selected);

    let quantity = 0;
    let cost = 0;
    let volume = 0;
    let netto = 0;
    let brutto = 0;
    items.forEach((e) => quantity += +e.quantity);
    items.forEach((e) => netto += +e.netto);
    items.forEach((e) => brutto += +e.brutto);
    items.forEach((e) => volume += +e.volume);
    items.forEach((e) => cost += +e.cost * +e.quantity * e.multiply);

    function resetSelected() {
        dispatch({type: 'RESET_SELECTED'});
        hist('/list');
    }
    const _18 = css(`
            width: 18%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F8FAFF;
            border-right: 2px solid #E2E4EA;
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 14px;
            color: #606F7A;
    `)
    const title = css(`
            min-width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F8FAFF;
            border-right: 2px solid #E2E4EA;
            font-family: "Open Sans", sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 14px;
            color: #606F7A;
    `)
    const table = css(`
            display: flex;
            align-self: flex-end;
            width: 100%;
            height: 80px;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 10px;
            margin-top: 10px;
    `)
    return (
        <div css={table}>
            <div css={title}>Итого:</div>
            <div css={_18}>{quantity} шт.</div>
            <div css={_18}>{netto} кг. нетто</div>
            <div css={_18}>{brutto} кг. брутто</div>
            <div css={_18}>{volume} м3</div>
            <div css={_18}>{cost} руб.</div>
            <div css={_18} style={{color: '#5DAAFF', cursor: 'pointer'}} onClick={resetSelected}>Сбросить</div>
        </div>
    );
};

export default TotalTable;