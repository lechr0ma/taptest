import React from 'react';
import Header from "../main/Header";
import Basket from "../main/Basket";
import BasketBottomButtons from "../static/BasketBottomButtons";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const BasketPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div>
            <Header></Header>
            <Basket></Basket>
            <BasketBottomButtons/>

        </div>
    );}
};

export default BasketPage;