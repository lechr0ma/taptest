import React from 'react';
import Header from "../main/Header";
import Basket from "../main/Basket";
import BasketBottomButtons from "../static/BasketBottomButtons";

const BasketPage = () => {
    return (
        <div>
            <Header></Header>
            <Basket></Basket>
            <BasketBottomButtons/>

        </div>
    );
};

export default BasketPage;