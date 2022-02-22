import React, {useState} from 'react';
import logo from "../../img/logo.png";
import classes from './Header.module.css';
import editImg from '../../img/edit.svg';
import okImg from '../../img/ok.svg';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Hint from "../static/Hint";
import {chinaTowns, russiaTowns, currencies} from "../forms/MainForm";
import sel from '../../img/selectarr.svg'



const Header = ({isRoad, isBasket}) => {
    const roadMap = useSelector(state => state.road);
    const hint = useSelector(state => state.hints);
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch();
    const hist = useNavigate();

    const [towns, setTown] = useState([]);
    const [edit, setEdit] = useState('string');
    const [cityRu, setCityRu] = useState(roadMap.to)
    const [ruList, setRuList] = useState([])
    const [currency, setCurrency] = useState(roadMap.money)
    const [currencyList, setCurrencyList] = useState([])

    let road;

    const getText = (event) =>{
        event.preventDefault();
        let text = event.target.value.toUpperCase();
        if (text){
            setTown(chinaTowns.filter(e => !e.toUpperCase().indexOf(text)).map((e, index) => <div key={index} onClick={setTownList}>{e}</div>))
        } else {
            setTown([]);
        }
    }
    const setTownList = (event) =>{
        document.getElementById('navcityChina').value = event.target.innerText;
        setTown([]);
    }
    const getRus = () =>{
        document.getElementsByClassName(classes.arrow)[0].classList.toggle(classes.active);
        document.getElementsByClassName(classes.russiaList)[0].classList.toggle(classes.active);
        setRuList(russiaTowns.filter(e => e!== cityRu).map(element =>
            <div key={element} onClick={() => setRus(element)}>{element}</div>))
    }
    function setRus(text) {
        document.getElementsByClassName(classes.arrow)[0].classList.toggle(classes.active);
        document.getElementsByClassName(classes.russiaList)[0].classList.toggle(classes.active);
        setTimeout(() => setRuList([]), 200 ) ;
        setCityRu(text);
    }
    const getCur = () =>{
        document.getElementsByClassName(classes.arrow)[1].classList.toggle(classes.active);
        document.getElementsByClassName(classes.curList)[0].classList.toggle(classes.active);
        setCurrencyList(currencies.filter(e => e.name!== currency).map(element =>
            <div key={element.name} onClick={() => setCur(element.name)}>{element.name}</div>))
    }
    const setCur = (text) => {
        document.getElementsByClassName(classes.arrow)[1].classList.toggle(classes.active);
        document.getElementsByClassName(classes.curList)[0].classList.toggle(classes.active);
        setTimeout(() => setCurrencyList([]), 200 ) ;
        setCurrency(text);
    }

    const setRoad = () =>{
        let from = document.getElementById('navcityChina').value;
        let to = cityRu;
        let money = currency;
        let multiply = currencies.filter(e=> e.name === money)[0].multiply;
        if(from.replace(/\p{Alpha}/gu, '').length === 0 && from){
        dispatch({type: 'ADD_ROAD', payload:{from:from, to:to, money:money, multiply:multiply}})
        setEdit('string');}
        else {
            alert('Введите корректное значение')
        }
    }
    if(edit === 'none'){
        road = '';
    }
    else if (edit === 'string'){
        road = <button className={classes.roadBtn} onMouseOver={() => setEdit('div') }>{roadMap.from} &rarr; {roadMap.to}, {roadMap.money}</button>
    } else if (edit === 'div'){
        road = <div className={classes.roadBtn_active} onMouseLeave={()=> setEdit('string')}>
                    {roadMap.from} &rarr; {roadMap.to}, {roadMap.money}
                    <button onClick={() => setEdit('select')}>
                        <img src={editImg}  alt="edit"/></button>

                </div>
    } else if(edit === 'select'){
        road = <div className={classes.roadBtn_edit}>
            <input autoComplete='off' id='navcityChina' className={classes.cityChina} defaultValue={roadMap.from} onChange={getText}/>
            <div className={classes.townsList}>{towns}</div>
            <i></i>
            <div id='navcityRussia' className={classes.cityRussia} onClick={getRus}>
                <span>{cityRu}</span>
                <img className={classes.arrow} src={sel} alt="arrow"/>
            </div>
            <div className={classes.russiaList}>
                {ruList}
            </div>
            <i></i>
            <div  className={classes.currency} onClick={getCur} >
                {currency}
                <img className={classes.arrow} src={sel} alt="arrow"/>
            </div>
            <div className={classes.curList}>
                {currencyList}
            </div>
            <button onClick={setRoad}>
                <img src={okImg} alt="OK"/></button>
        </div>
    }
    return (
        <header className='app_header'>
            <Link to='/'><img src={logo} alt="logo"/></Link>

            {isRoad
            &&
            <div className={classes.road}>
                {road}
                {hint[0] &&  roadMap.from && <Hint
                    body='Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения'
                    num={0}
                    arrow = 'up'
                    style={{
                        flexDirection: 'row-reverse',
                        top: 55,
                        left: 50,
                        width: 790,
                        height: 55,

                    }}
                />}
            </div>
            }
            { isBasket
                &&
                <div className={classes.items}>Выбранные товары({selected.length})</div>
            }
            <button onClick={() => hist('/contacts')} className='feedback'>Связаться</button>
        </header>
    );
};

export default Header;