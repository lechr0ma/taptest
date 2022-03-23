import React from 'react';
import {Route, Routes} from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import MainPage from "../pages/MainPage";
import SendPage from "../pages/SendPage";
import BasketPage from "../pages/BasketPage";
import ItemListPage from "../pages/ItemListPage";
import LoadPage from "../pages/LoadPage";
import TotalPage from "../pages/TotalPage";
import ItemOptionsMobile from "../Components/mobile/pages/ItemOptionsMobile";
import BasketItemEdit from "../Components/mobile/pages/BasketItemEdit";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/contacts' element={<ContactsPage/>}/>
            <Route exact path='/' element={<MainPage/>}/>
            <Route path = '/sended' element={<SendPage/>}/>
            <Route path = '/basket' element={<BasketPage/>}/>
            <Route path = '/list' element={<ItemListPage/>}/>
            <Route path = '/load' element={<LoadPage/>}/>
            <Route path = '/total' element={<TotalPage/>}/>
            <Route path='/item/:id' element={<ItemOptionsMobile/>}/>
            <Route path='/edit/:id' element={<BasketItemEdit/>}/>
            <Route exact path='*' element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRouter;