/** @jsxImportSource @emotion/react */
import React from 'react';
import {useNavigate} from "react-router-dom";
import WhiteButton from "../UI/button/WhiteButton";
import {css} from "@emotion/react";
import HeaderLeftBlock from "./HeaderLeftBlock";


const Header = ({isRoad, isBasket}) => {
    const hist = useNavigate();
    return (
        <header className='app__header'>
            <HeaderLeftBlock
                isRoad={isRoad}
                isBasket={isBasket}
            />
            <WhiteButton
                onClick={() => hist('/contacts')}
                width='172px'
                height='60px'
                css={css(`margin-left: auto;`)}
            >
                Связаться
            </WhiteButton>
        </header>
    );
};

export default Header;