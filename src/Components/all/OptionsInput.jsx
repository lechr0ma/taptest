/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const OptionsInput = ({
                          type,
                          value,
                          autoComplete,
                          onChange,
                          variant,
                          placeholder,
                          ...props
                      }) => {
    let style;
    const search = css(`
            height: 60px;
            width: 400px;
            color: #606F7A;
            background: #FFFFFF;
            box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            border: 0;
            font-family: "Open Sans", serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            padding-left: 10px; `
    )
    const options = css(`
            width: 320px;
            height: 60px;
            color: #606F7A;
            background: #FFFFFF;
            box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            border: 0;
            margin-bottom: 15px;
            font-family: "Open Sans", serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            padding-left: 20px;
            &::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
    `)
    if (variant === 'search') {
        style = search
    }
    if (variant === 'options') {
        style = options
    }
    if (variant === 'feedback') {
        style = css(`
            width: calc(50% - 22px);
            height: 55px;
            background: #FFFFFF;
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            border: 0;
            margin: 5px;
            font-family: "Open Sans",sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            padding-left: 10px;
        `)
    }
    return (
        <input
            css={style}
            value={value}
            type={type}
            autoComplete={autoComplete}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
};

export default OptionsInput;