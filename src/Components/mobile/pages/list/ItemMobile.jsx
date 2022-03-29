/** @jsxImportSource @emotion/react */
import React from 'react';
import {useNavigate} from "react-router-dom";
import BlueButton from "../../UI/button/BlueButton";
import {css} from "@emotion/react";

const ItemMobile = ({item}) => {
    const history = useNavigate();
    const path = '/item/' + item.id;
    return (
        <div css={css(`
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 5px;
            background: #F8FAFF;
        `)}>
            <img css={css(`
                    width: 70px;
                    height: 50px;
                  `)}
                 src={item.image}
                 alt="item"
            />
            <p css={css(`
                width: 35%;
                font-family: "Open Sans", serif;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 12px;
                letter-spacing: .2px;
                color: #606F7A;
                text-align: center;
            `)}>{item.description}</p>
            <BlueButton
                variant='mini'
                onClick={() => history(path)}
            >
                Добавить
            </BlueButton>
        </div>
    );
};

export default ItemMobile;