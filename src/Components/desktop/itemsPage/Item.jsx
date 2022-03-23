/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from './Item.module.css';
import BlueButton from "../UI/button/BlueButton";
import {css} from "@emotion/react";


const Item = ({item, img, rem, description, get, id}) => {

    return (
        <div className={classes.container}>
            <img src={img} alt='image'/>
            <p css={css(`text-align: center`)}>{description}</p>
            {!get &&
            <BlueButton
                onClick={() => rem(item, id)}
                style={{width: 132, height: 45}}
            >
                Выбрать
            </BlueButton>
            }
            {get &&
            <button
                css={css(`
                    font-family: "Open Sans", sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 17px;
                    line-height: 17px;
                    letter-spacing: 0.2px;
                    color: #5DAAFF;
                    margin-left: 10px;
                    border: 0;
                    width: 132px;
                    height: 45px;
                    background: #FFFFFF;
                    box-shadow: 0 4px 40px rgba(93, 170, 255, 0.29);
                    border-radius: 3px;
                `)}
            >
                Выбрано
            </button>
            }
        </div>
    );
};

export default Item;