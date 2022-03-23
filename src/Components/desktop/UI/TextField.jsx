/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const TextField = ({name, id}) => {
    const style = css(`
            width: calc(100% - 20px);
            min-height: 150px;
            background: #FFFFFF;
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            border: 0;
            font-family: "Open Sans",sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            padding: 10px;
    `)
    return (
        <textarea
            name={name}
            id={id}
            css={style}
        >

        </textarea>
    );
};

export default TextField;