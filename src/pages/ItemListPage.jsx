import React from 'react';
import Header from "../Components/desktop/header/Header";
import ItemsPage from "../Components/desktop/itemsPage/ItemsPage";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import ItemListMobile from "../Components/mobile/pages/ItemListMobile";

const ItemListPage = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div>
            <Header isRoad={true}/>
            <ItemsPage/>
            <ItemListMobile/>
        </div>
    );}
};

export default ItemListPage;