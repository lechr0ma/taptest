/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";


const ItemDescription = ({item, variant}) => {
    let style;
    if (variant === 'mobile') {
        style = css(`
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 90%;
            margin-top: 20px;
            p{
                width: 50%;
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 25px;
                letter-spacing: .2px;
                color: #606F7A;
                text-align: center;
             }
             img{
                height: 88px;
                width: 140px;
            }
            `)
    }
    if (variant === 'desktop') {
        style = css(`
            width: 404px;
            height: 70px;
            background: #F8FAFF;
            border-radius: 3px;
            display: flex;
            align-items: center;
            gap: 20px;
            img{
                width: 108px;
                height: 70px;
            }
            p{
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 17px;
                line-height: 17px;
                letter-spacing: -1px;
                color: #606F7A;
            }
            `);
    }
    if (variant === 'basket') {
        style = css(`
            min-width: 30%;
            display: flex;
            align-items: center;
            background: #F8FAFF;
            border-right: 1px solid #E2E4EA;
            line-height: 23px;
            & p {
                text-align: center;
                width: 100%;
                padding: 5px;
            }
            & img {
                height: 100%;
                justify-self: flex-start;
                border-right: 2px solid #E2E4EA;
            }
        `)
    }


    return (
        <div css={style}>
            <img src={item.image} alt="Item Photo"/>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDescription;