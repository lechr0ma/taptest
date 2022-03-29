import React from 'react';
import Header from "../Components/desktop/header/Header";
import MainForm from "../Components/desktop/main/MainForm";
import MainMobile from "../Components/mobile/pages/main/MainMobile";

const MainPage = () => {
    return (
        <div className='start'>
            <Header/>
            <MainForm/>
            <MainMobile/>
        </div>
    );
};

export default MainPage;