/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import classes from "./pages/mainStyle.module.css";
import MainInputMobile from "./UI/input/MainInputMobile";
import DivSelect from "./UI/select/divselect/DivSelect";
import {chinaTowns, currencies, russiaTowns} from "../../logic/staticData";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import BlueButton from "./UI/button/BlueButton";


const MainInputsMobile = () => {
    const savedRoad = useSelector(state => state.road)
    const hist = useNavigate()
    const dispatch = useDispatch();
    const saveRoad = () => {
        dispatch({type: 'ADD_ROAD', payload: road})
        hist('/list')
    }
    const [road, setRoad] = useState({
        from: '',
        to: savedRoad.to ? savedRoad.to : russiaTowns[0].name,
        money: savedRoad.money ? savedRoad.money : currencies[0].name,
        exchange: savedRoad.money ? currencies.filter(e => e.name === savedRoad.money)[0].exchange : currencies[0].exchange,
        multiply: savedRoad.multiply ? savedRoad.multiply : currencies[0].multiply
    })

    function setCurrency(obj) {
        let exchange = currencies.find(e => e.name === obj.money).exchange;
        let multiply = currencies.find(e => e.name === obj.money).multiply;
        setRoad({...obj, exchange: exchange, multiply: multiply})

    }

    const [isFilled, setFill] = useState(false);
    const [hint, setHint] = useState(false);

    return (
        <div className={classes.input_container}>
            <MainInputMobile
                arr={chinaTowns}
                setRoad={setRoad}
                road={road}
                title='Откуда'
                fill={setFill}
                hint={setHint}
                option='from'
            />
            <DivSelect
                title="Куда"
                option='to'
                arr={russiaTowns}
                road={road}
                setRoad={setRoad}
            />
            <DivSelect
                title="Валюта"
                option='money'
                arr={currencies}
                road={road}
                setRoad={setCurrency}
            />
            <DivSelect
                title="Курс валюты"
                option='exchange'
                road={road}
                disabled={true}
            />
            <div className={classes.inputs__button}>
                {isFilled ?
                    <BlueButton
                        onClick={saveRoad}
                        variant='full'
                    >
                        Выбрать мебель
                    </BlueButton>
                    :
                    <BlueButton
                        onClick={() => setHint(true)}
                        variant='full'
                        disabled={true}
                    >
                        Выбрать мебель
                    </BlueButton>
                }
                {hint &&
                <p className={classes.hint}>
                    Введите корректное название города!
                </p>
                }
            </div>
        </div>
    );
};

export default MainInputsMobile;