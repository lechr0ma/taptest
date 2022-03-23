import React from 'react';
import Header from "../Components/desktop/header/Header";
import Basket from "../Components/desktop/basket/Basket";
import Total from "../Components/desktop/total/Total";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import TotalMobile from "../Components/mobile/pages/TotalMobile";

const TotalPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div>
            <Header isBasket={true}/>
            <Basket/>
            <Total/>
            <TotalMobile/>
        </div>
    );}
};

export default TotalPage;