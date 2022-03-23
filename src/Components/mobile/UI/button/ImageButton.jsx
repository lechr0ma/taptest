/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const ImageButton = ({image, onClick, alt}) => {
    return (
        <button
            css={css`
                border: 0;
                border-radius: 5px;
                background: inherit;
                cursor: pointer;
                `}
            onClick={onClick}
        >
            <img src={image} alt={alt}/>
        </button>
    );
};

export default ImageButton;