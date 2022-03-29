import React from 'react';
import classes from './TotalMobile.module.css'
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import MobileHeader from "../../header/MobileHeader";
import TotalOptions from "./TotalOptions";
import TotalFees from "./TotalFees";
import TotalButtons from "./TotalButtons";


const TotalMobile = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected);
    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        let options = {
            volume: 0,
            netto: 0,
            brutto: 0,
            cost: 0
        };
        selected.forEach(e => {
            options.volume += e.volume * e.quantity;
            options.brutto += e.brutto * e.quantity;
            options.netto += e.netto * e.quantity;
            options.cost += e.cost * e.quantity * road.multiply
        });
        return (
            <div className='mobile__total'>
                <MobileHeader goback={true}/>
                <div className={classes.road}>
                    {road.from}&rarr;{road.to}, {road.money}
                </div>
                <TotalOptions options={options}/>
                <TotalFees options={options}/>
                <TotalButtons options={options}/>
            </div>
        );
    }
};

export default TotalMobile;