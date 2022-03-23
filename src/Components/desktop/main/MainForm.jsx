/** @jsxImportSource @emotion/react */
import React from 'react';
import MainInputs from "./MainInputs";
import P48 from "../UI/P/P48";
import {css} from "@emotion/react";


const MainForm = () => {


    return (
        <article className='main__form'>
            <div css={css({marginTop: 100})}>
                <P48>Рассчитайте</P48>
                <P48>стоимость доставки из Китая</P48>
            </div>
            <MainInputs/>
        </article>
    );
};

export default MainForm;