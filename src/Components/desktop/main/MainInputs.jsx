import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currencies, russiaTowns} from "../../../logic/staticData";
import uarr from "../../../img/uparr.svg";
import darr from "../../../img/downarr.svg";
import {useNavigate} from "react-router-dom";
import rwarr from "../../../img/rwarr.svg";
import BlueButton from "../UI/button/BlueButton";
import P15 from "../UI/P/P15";
import MainInputsRow from "./MainInputsRow";
import {saveRoad} from "../../../logic/roadInputs";
import Hint from "../UI/Hint";

const MainInputs = () => {
    const hist = useNavigate();
    const dispatch = useDispatch();
    const road = useSelector(state => state.road);

    let [hint, setHint] = useState(road.from ? 'go' : 'fill');
    let [cityRussia, setRussia] = useState(road.to ? road.to : russiaTowns[0].name)
    let [currency, setCurrency] = useState(road.money ? road.money : currencies[0].name)
    let exchange = currencies.filter(e => e.name === currency)[0].exchange


    return (
        <div className='mainInputs'>
            <div className="upperText">
                <P15>Откуда</P15>
                <P15>Куда</P15>
                <P15>Валюта</P15>
                <P15>Курс</P15>
            </div>
            <div className="mainInputsRow">
                <MainInputsRow
                    setCurrency={setCurrency}
                    setHint={setHint}
                    setRussia={setRussia}
                    cityRussia={cityRussia}
                    exchange={exchange}
                    currency={currency}
                />
                {hint === 'fill' &&
                <Hint
                    style={{
                        bottom: -70,
                        width: 350,
                        height: 55
                    }}
                >
                    <p>Для начала заполните поля выше</p>
                    <img src={uarr} alt="uparrow"/>
                </Hint>
                }
                {hint === 'go' &&
                <Hint
                    style={{
                        top: -70,
                        left: 500,
                        width: 350,
                        height: 55
                    }}
                >
                    <p>Теперь нажмите кнопку "Далее"</p>
                    <img src={darr} alt="downarrow"/>
                </Hint>
                }
                {hint === 'go' ?
                    <BlueButton
                        onClick={() => saveRoad(dispatch, cityRussia, currency, () => hist('/list'))}
                        style={{width: 200, height: 85, marginLeft: 12}}
                    >
                        Далее
                        <img src={rwarr} style={{marginLeft: 10}} alt="righarrow"/>
                    </BlueButton>
                    :
                    <BlueButton
                        onClick={() => alert('Введите корректные значения')}
                        style={{width: 200, height: 85, marginLeft: 12}}
                    >
                        Далее
                        <img src={rwarr} style={{marginLeft: 10}} alt="righarrow"/>
                    </BlueButton>
                }
            </div>

        </div>
    );
};

export default MainInputs;