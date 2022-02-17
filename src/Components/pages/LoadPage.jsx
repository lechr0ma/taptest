import React from 'react';
import classes from '../main/LoadPage.module.css'
import spinner from '../../img/spinner.svg'
import Header from "../main/Header";
import {useNavigate} from "react-router-dom";


const LoadPage = () => {
    const hist = useNavigate();
    function serverEmu() {
        hist('/total');
    }
    setTimeout(serverEmu, 2000);
    return (
        <div>
            <Header isRoad={true} isBasket={true}/>
        <div className={classes.container}>
            <div className={classes.loading}>
                <img src={spinner} alt="Загрузка"/>
                <p>Идет загрузка...</p>
            </div>
        </div>
        </div>
    );
};

export default LoadPage;