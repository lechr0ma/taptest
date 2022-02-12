import React from 'react';
import classes from '../main/LoadPage.module.css'
import spinner from '../../img/spinner.svg'
import Header from "../main/Header";
import {Link} from "react-router-dom";


const LoadPage = () => {
    function serverEmu() {
        let element = document.getElementById('hidden');
        element.click();
    }
    setTimeout(serverEmu, 2000);
    return (
        <div>
            <Header/>
        <div className={classes.container}>
            <div className={classes.loading}>
                <img src={spinner} alt="Загрузка"/>
                <p>Идет загрузка...</p>
                <Link to='/total'><div id='hidden'></div></Link>
            </div>
        </div>
        </div>
    );
};

export default LoadPage;