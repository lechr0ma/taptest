import React from 'react';
import Header from "../main/Header";
import ItemsPage from "../main/ItemsPage";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ItemListPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div>
        <Header/>
        <ItemsPage/>
        </div>
    );}
};

export default ItemListPage;