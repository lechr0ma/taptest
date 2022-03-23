/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const OptionsButton = ({onClick, image}) => {
    return (
        <button
            css={css`
            border: 0;
            border-radius: 5px;
            background: #FCFDFF;
            cursor: pointer;
            `}
            onClick={onClick}
        >
            <img src={image} alt="edit"/>
        </button>
    );
};

export default OptionsButton;