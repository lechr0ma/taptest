import React, {useState} from 'react';
import MainInput from "../UI/input/MainInput";
import VertLine from "../UI/VertLine";
import MainSelect from "../UI/select/MainSelect";
import DisabledDiv from "../UI/DisabledDiv";
import {useSelector} from "react-redux";
import {getCurrensies, getRus, getText} from "../../../logic/roadInputs";

const MainInputsRow = ({currency, setCurrency, cityRussia, setRussia, exchange, setHint}) => {

    const road = useSelector(state => state.road);
    let [chinaList, setChinaList] = useState([])
    let [russiaList, setRuList] = useState([])
    let [currencyList, setCurList] = useState([])


    return (
        <div className='main__inputs'>
            <MainInput
                onChange={(e) => getText(e, setHint, setChinaList)}
                defaultValue={road.from}
                id='cityChina'
                autoComplete='off'
                options={chinaList}
                variant='full'
            />
            <VertLine/>
            <MainSelect
                onClick={() => getRus(cityRussia, setRussia, setRuList)}
                value={cityRussia}
                list={russiaList}
                className='russiaList'
                variant='full'
            />
            <VertLine/>
            <MainSelect
                onClick={() => getCurrensies(currency, setCurrency, setCurList)}
                value={currency}
                list={currencyList}
                className='currencyList'
                variant='full'
            />
            <VertLine/>
            <DisabledDiv>{exchange}</DisabledDiv>
        </div>
    );
};

export default MainInputsRow;