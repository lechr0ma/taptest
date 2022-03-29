import React from 'react';
import Header from "../Components/desktop/header/Header";
import Basket from "../Components/desktop/basket/Basket";
import BasketBottomButtons from "../Components/desktop/basket/BasketBottomButtons";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import BasketMobile from "../Components/mobile/pages/basket/BasketMobile";

const BasketPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div>
            <Header isRoad={true}/>
            <Basket title={true}/>
            <BasketBottomButtons/>
            <BasketMobile/>
        </div>
    );}
};

export default BasketPage;