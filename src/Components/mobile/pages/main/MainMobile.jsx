import React from 'react';
import classes from './mainStyle.module.css'
import MobileHeader from "../../header/MobileHeader";
import MainInputsMobile from "./MainInputsMobile";


const MainMobile = () => {



    return (
        <div className='mobile__main'>
            <MobileHeader logo={true}/>
            <div className={classes.main__title}>Рассчитайте стоимость доставки из Китая</div>
            <MainInputsMobile/>
        </div>
    );
};

export default MainMobile;