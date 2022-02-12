import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import MainMobile from "./MainMobile";
import ItemListMobile from "./ItemListMobile";
import ItemOptionsMobile from "./ItemOptionsMobile";
import BasketMobile from "./BasketMobile";
import BasketItemEdit from "./BasketItemEdit";
import TotalMobile from "./TotalMobile";
import FeedbackFormMobile from "./FeedbackFormMobile";
import Sended from "./Sended";


const MobileApp = () => {
    return (
        <div style={{
            width: '100wv',
            // height: '100vh',
            backgroundColor:'#E5E5E5'
        }}>
            <Routes>
                <Route exact path='/' element={<MainMobile/>}/>
                <Route path='/list' element={<ItemListMobile/>}/>
                <Route path='/item/:id' element={<ItemOptionsMobile/>}/>
                <Route path='/basket' element={<BasketMobile/>}/>
                <Route path='/edit/:id' element={<BasketItemEdit/>}/>
                <Route path='/total' element={<TotalMobile/>}/>
                <Route path='/feedback' element={<FeedbackFormMobile/>}/>
                <Route path='/sended' element={<Sended/>}/>
            </Routes>
        </div>
    );
};

export default MobileApp;