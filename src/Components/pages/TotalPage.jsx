import React from 'react';
import Header from "../main/Header";
import Basket from "../main/Basket";
import Total from "../static/Total";

const TotalPage = () => {
    return (
        <div className='total'>
            <Header/>
            <Basket/>
            <Total/>
        </div>
    );
};

export default TotalPage;