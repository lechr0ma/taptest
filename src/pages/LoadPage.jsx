/** @jsxImportSource @emotion/react */
import React from 'react';
import spinner from '../img/spinner.svg'
import Header from "../Components/desktop/header/Header";
import {useNavigate} from "react-router-dom";
import {css} from "@emotion/react";


const LoadPage = () => {
    const hist = useNavigate();
    const p = css(`
        font-family: "Open Sans", serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: .2px;
        color: #606F7A;
    `)
    const spin = css(`
        animation: spin 2s linear infinite;
        @keyframes spin {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    `)

    function serverEmu() {
        hist('/total');
    }

    setTimeout(serverEmu, 2000);
    return (
        <div>
            <Header isRoad={true} isBasket={true}/>
            <div className='loading'>
                <img css={spin} src={spinner} alt="Загрузка"/>
                <p css={p}>Идет загрузка...</p>
                {/*    rewrite*/}
            </div>
        </div>
    );
};

export default LoadPage;