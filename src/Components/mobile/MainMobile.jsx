import React, { useState} from 'react';
import classes from './mainStyle.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Header from "./Header";


const chinaTowns = ['Чунцин', 'Шанхай', 'Пекин', 'Тяньцзинь', 'Гуанчжоу', 'Чэнду', 'Шэньчжэнь', 'Дунгуань', 'Ухань', 'Шэньян' ];
const russiaTowns = ['Москва', 'Санкт-Петербург', 'Казань', 'Владивосток', 'Екатеринбург', 'Хабаровск', 'Челябинск', 'Самара', 'Нижний Новгород'];
const currencies = [{name: 'USD', exchange: '80 руб.', multiply: 80},
    {name: 'CNY', exchange: '12 руб.', multiply: 12},
    {name: 'RUB', exchange: '', multiply: 1}]

const MainMobile = () => {
    const dispatch = useDispatch();
    const road = useSelector(state => state.road);
    const saveRoad = () => {
        let from = document.getElementById('cityChinaMobile').value;
        let to = document.getElementById('cityRus').innerText;
        let money = document.getElementById('currencyMobile').innerText;
        let multiply = currencies.filter(e=> e.name === money)[0].multiply;
        dispatch({type:'ADD_ROAD', payload:{from:from, to:to, money:money, multiply: multiply}})
    }
    let [chinaTownsList, setChinaTown] = useState([]);
    let [russiaTownsList, setRussiaTown] = useState([])
    let [currencyList, setCurrencyList] = useState([])
    let [exchange, setExchange] = useState(currencies[0].exchange)
    const [isFilled, setFill] = useState(false);
    const [hint, setHint] = useState(false);
    const setTownChina = (event) =>{
        document.getElementById('cityChinaMobile').value = event.target.innerText;
        setChinaTown([]);
    }

    const getText = (event) =>{
        event.preventDefault();
        let text = event.target.value.toUpperCase();
        if (text && text.replace(/\p{Alpha}/gu, '').length === 0){
            setChinaTown(chinaTowns.filter(e => !e.toUpperCase().indexOf(text)).map(e => <div key={e} className={classes.listItem} onClick={setTownChina}>{e}</div>));
            setFill(true);
            setHint(false);
        }
        else {
            setFill(false);
            setChinaTown([]);
        }
    }
    const getRussian = () =>{
        setRussiaTown(russiaTowns.map(e => <div key={e} className={classes.listItem} onClick={setTownRus}>{e}</div> ));
        setCurrencyList([]);
    }
    const setTownRus = (event) => {
        document.getElementById('cityRus').innerText = event.target.innerText;
        setRussiaTown([]);
    }
    const getCurrency = () => {
        setCurrencyList(currencies.map(e => <div key={e.name} className={classes.listItem} onClick={setCur}>{e.name}</div> ));
        setRussiaTown([]);
    }
    const setCur = (event) =>{
        document.getElementById('currencyMobile').innerText = event.target.innerText;
        setExchange(currencies.filter(e => e.name === event.target.innerText)[0].exchange);
        setCurrencyList([]);
    }


    return (
        <div className={classes.container}>
            <Header logo={true}/>
            <div className={classes.mainText}>Рассчитайте стоимость доставки из Китая</div>
            <div className={classes.input_container}>
                <div className={classes.input}>
                    <p>Откуда:</p>
                    <input autoComplete='off' placeholder={road.from} id='cityChinaMobile' onChange={getText} className={classes.inputForm}/>
                    {chinaTownsList.length > 0 && <div className={classes.list}>
                        {chinaTownsList}
                    </div>}
                </div>
                <div className={classes.input}>
                    <p>Куда:</p>
                    <div className={classes.inputForm} id='cityRus' onClick={getRussian}>Владивосток</div>
                    {russiaTownsList.length > 0 && <div className={classes.list}>{russiaTownsList}</div>}
                </div>
                <div className={classes.input}>
                    <p>Валюта:</p>
                    <div className={classes.inputForm} id='currencyMobile' onClick={getCurrency}>USD</div>
                    {currencyList.length > 0 && <div className={classes.list}>{currencyList}</div>}
                </div>
                <div className={classes.input}>
                    <p>Курс:</p>
                    <div className={classes.inputForm}>{exchange}</div>
                </div>
            </div>
            {isFilled ? <Link to='/list'><button onClick={saveRoad} className={classes.mainButton}>Выбрать мебель</button></Link>
            :
                <button className={classes.mainButton} onClick={()=>setHint(true)}>Выбрать мебель</button>}

            {hint && <div className={classes.hint}>Введите корректное название города!</div> }

        </div>
    );
};

export default MainMobile;