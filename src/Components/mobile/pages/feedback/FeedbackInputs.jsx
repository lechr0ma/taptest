/** @jsxImportSource @emotion/react */
import React from 'react';
import OptionInput from "../../UI/input/OptionInput";
import {css} from "@emotion/react";

const FeedbackInputs = ({inputs, setInputs, hint}) => {
    const pCss = css(`
        font-family: "Open Sans", serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.2px;
        color: #606F7A;
    `)
    return (
        <div css={css(`
            width: 90%;
            margin-top: 30px;`)}
        >
            <p css={pCss}>Данные для связи</p>
            <OptionInput setSelect={setInputs} select={inputs} option='name' title='Имя' type='text'
                         style={{border: '1px solid #B7B7B7'}}/>
            <OptionInput setSelect={setInputs} select={inputs} option='tel' title='Телефон' type='tel'
                         style={{border: '1px solid #B7B7B7'}}/>
            <OptionInput setSelect={setInputs} select={inputs} option='email' title='E-mail' type='email'
                         style={{border: '1px solid #B7B7B7'}}/>
            {hint && <p style={{color: "red"}}>*Заполните поле {hint} !</p>}
        </div>
    );
};

export default FeedbackInputs;