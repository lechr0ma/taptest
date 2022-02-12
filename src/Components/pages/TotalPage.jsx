import React from 'react';
import Header from "../main/Header";
import Basket from "../main/Basket";
import Total from "../static/Total";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const TotalPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div className='total'>
            <Header/>
            <Basket/>
            <Total/>
        </div>
    );}
};

export default TotalPage;