import React, {useRef, useState} from 'react';
import img from '../../img/logo.png'
import classes from './mainStyle.module.css'
import menu from '../../img/Menu.svg'
import close from '../../img/close.svg'
import facebook from '../../img/FacebookMobile.svg'
import ig from '../../img/instagramMobile.svg'
import wa from '../../img/WhatsappMobile.svg'
import wc from '../../img/WechatMobile.svg'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import LeftMenu from "./LeftMenu";
import {Transition} from "react-transition-group";
import Header from "./Header";


const chinaTowns = ['Чунцин', 'Шанхай', 'Пекин', 'Тяньцзинь', 'Гуанчжоу', 'Чэнду', 'Шэньчжэнь', 'Дунгуань', 'Ухань', 'Шэньян' ];
const russiaTowns = ['Москва', 'Санкт-Петербург', 'Казань', 'Владивосток', 'Екатеринбург', 'Хабаровск', 'Челябинск', 'Самара', 'Нижний Новгород'];
const currencies = [{name: 'USD', exchange: '80 руб.'},
    {name: 'CNY', exchange: '12 руб'},
    {name: 'RUB', exchange: ''}]

const MainMobile = () => {
    const hist = useNavigate();
    const dispatch = useDispatch();
    const road = useSelector(state => state.road);
    const saveRoad = () => {
        let from = document.getElementById('cityChinaMobile').value;
        let to = document.getElementById('cityRus').innerText;
        let money = document.getElementById('currencyMobile').innerText;

        dispatch({type:'ADD_ROAD', payload:{from:from, to:to, money:money}})
        console.log(road);
    }
    const refMenu = useRef();
    let [chinaTownsList, setChinaTown] = useState([]);
    let [russiaTownsList, setRussiaTown] = useState([])
    let [currencyList, setCurrencyList] = useState([])
    let [exchange, setExchange] = useState(currencies[0].exchange)
    const [isFilled, setFill] = useState(false);
    const [hint, setHint] = useState(false);
    const setTownChina = (event) =>{
        document.getElementById('cityChinaMobile').value = event.target.innerText;
        setChinaTown([]);
        setFill(true);
        setHint(false);
    }

    const getText = (event) =>{
        event.preventDefault();
        let text = event.target.value.toUpperCase();
        if (text){
            setChinaTown(chinaTowns.filter(e => !e.toUpperCase().indexOf(text)).map(e => <div className={classes.listItem} onClick={setTownChina}>{e}</div>));
        } else {
            setFill(false);
            setChinaTown([]);
        }
    }
    const getRussian = () =>{
        setRussiaTown(russiaTowns.map(e => <div className={classes.listItem} onClick={setTownRus}>{e}</div> ));
        setCurrencyList([]);
    }
    const setTownRus = (event) => {
        document.getElementById('cityRus').innerText = event.target.innerText;
        setRussiaTown([]);
    }
    const getCurrency = () => {
        setCurrencyList(currencies.map(e => <div className={classes.listItem} onClick={setCur}>{e.name}</div> ));
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
            {isFilled ?<Link to='/list'><button onClick={saveRoad} className={classes.mainButton}>Выбрать мебель</button></Link>
            :
                <button className={classes.mainButton} onClick={()=>setHint(true)}>Выбрать мебель</button>}

            {hint && <div className={classes.hint}>*Сначала заполните поля!</div> }

        </div>
    );
};

export default MainMobile;