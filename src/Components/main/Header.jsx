import React, {useState} from 'react';
import logo from "../../img/logo.png";
import classes from './Header.module.css';
import editImg from '../../img/edit.svg';
import okImg from '../../img/ok.svg';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Hint from "../static/Hint";

const chinaTowns = ['Чунцин', 'wwwwwww', 'Шанхай', 'Пекин', 'Тяньцзинь', 'Гуанчжоу', 'Чэнду', 'Шэньчжэнь', 'Дунгуань', 'Ухань', 'Шэньян' ];
const russiaTowns = ['Москва', 'Санкт-Петербург', 'Казань', 'Владивосток', 'Екатеринбург', 'Хабаровск', 'Челябинск', 'Самара', 'Нижний Новгород'];
const currencies = [{name: 'USD', exchange: '80 руб.'},
    {name: 'CNY', exchange: '12 руб'},
    {name: 'RUB', exchange: ''}]


const Header = () => {
    const [towns, setTown] = useState([])
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
    const roadMap = useSelector(state => state.road);
    const hint = useSelector(state => state.hints);
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch();

    let [edit, setEdit] = useState('string')
    const setRoad = () =>{
        let from = document.getElementById('navcityChina').value;
        let to = document.getElementById('navcityRussia').value;
        let money = document.getElementById('navcurrency').value;
        dispatch({type: 'ADD_ROAD', payload:{from:from, to:to, money:money}})
        setEdit('string');
    }
    let road;
    if (!roadMap.from){
        edit = 'none';
    }
    if(edit === 'none'){
        road = '';
    }
    else if (edit === 'string'){
        road = <button className={classes.roadBtn} onMouseOver={() => setEdit('div') }>{roadMap.from}&rarr;{roadMap.to}, {roadMap.money}</button>
    } else if (edit === 'div'){
        road = <div className={classes.roadBtn_active} onMouseLeave={()=> setEdit('string')}>
                    <div>
                        {roadMap.from}
                    </div>
                    &rarr;
                    <div>{roadMap.to},</div>
                    <div>{roadMap.money}</div>
                    <button onClick={() => setEdit('select')}>
                        <img src={editImg}  alt="edit"/></button>

                </div>
    } else if(edit === 'select'){
        road = <div className={classes.roadBtn_edit}>
            <input autoComplete='off' id='navcityChina' className={classes.cityChina} defaultValue={roadMap.from} placeholder={roadMap.from} onChange={getText}/>
            <div className={classes.townsList}>{towns}</div>
            <i></i>
            <select id='navcityRussia' className={classes.cityRussia} defaultValue={roadMap.to}>{russiaTowns.map((element, index) => <option key={index}>{element}</option>)}</select>
            <i></i>
            <select defaultValue={roadMap.money} className={classes.currency} id='navcurrency'>{currencies.map(e => <option key={e.name}>{e.name}</option>)}</select>
            <button onClick={setRoad}>
                <img src={okImg} alt="OK"/></button>
        </div>
    }
    return (
        <header className='app_header'>
            <Link to='/'><img src={logo} alt="logo"/></Link>
            {hint[0] &&  roadMap.from && <Hint
            body='Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения'
            num={0}
            style={{
                top: 70,
                left: '20%',
                width: 700,
                height: 40,
            }}
            />
            }
            <div className={classes.road}>
                {road}
            </div>
            <div>
                <Link to='/basket'><button className={classes.items}>Выбранные товары({selected.length})</button></Link>
            </div>
            <Link to='/contacts'><button className='feedback'>Связаться</button></Link>
        </header>
    );
};

export default Header;