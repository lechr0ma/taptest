import React from 'react';
import Header from "./Header";
import MainForm from "../forms/MainForm";

const StartPg = ({go}) => {

    return (
        <div className='start'>
            <Header go={go}/>
        <MainForm/>

        </div>
    );
};

export default StartPg;