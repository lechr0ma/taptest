/** @jsxImportSource @emotion/react */
import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../img/logo.png";
import HeaderRoad from "./HeaderRoad";
import HeaderBasket from "./HeaderBasket";
import {css} from "@emotion/react";
import {useSelector} from "react-redux";

const HeaderLeftBlock = ({isRoad, isBasket}) => {
    const road = useSelector(state => state.road);

    return (
        <div css={css(`display:flex;`)}>
            <Link to='/'><img src={logo} alt="logo"/></Link>
            {isRoad && road.from && <HeaderRoad/>}
            {isBasket && <HeaderBasket/>}
        </div>
    );
};

export default HeaderLeftBlock;