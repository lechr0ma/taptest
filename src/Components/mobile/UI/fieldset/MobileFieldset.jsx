/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";
import OptionInput from "../input/OptionInput";

const MobileFieldset = ({item, onChange, legend, option}) => {

    return (
        <fieldset css={css(`
                padding: 0;
                border: 1px #5DAAFF solid;
                border-radius: 3px;
                `)}
        >
            <legend css={css(`
                color: #5DAAFF;
                text-align: center;
                margin-bottom: -18px;
                position: relative;
                font-family: "Open Sans", sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                letter-spacing: -0.2px;
                `)}
                    tabIndex={0}
            >
                {legend}
            </legend>
            <OptionInput
                select={item}
                setSelect={onChange}
                option={option}
                title={legend}
                type='number'
            />
        </fieldset>
    );
};

export default MobileFieldset;