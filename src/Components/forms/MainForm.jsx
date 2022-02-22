import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import uarr from '../../img/uparr.svg'
import darr from '../../img/downarr.svg'
import rwarr from '../../img/rwarr.svg'
import sel from '../../img/selectarr.svg'

export const chinaTowns = ['Чунцин', 'Шанхай', 'Пекин', 'Тяньцзинь', 'Гуанчжоу', 'Чэнду', 'Шэньчжэнь', 'Дунгуань', 'Ухань', 'Шэньян' ];
export const russiaTowns = ['Москва', 'Санкт - Петербург', 'Казань', 'Владивосток', 'Екатеринбург', 'Хабаровск', 'Челябинск', 'Самара', 'Нижний Новгород'];
export const currencies = [{name: 'USD', exchange: '80 руб.', multiply: 80},
                    {name: 'CNY', exchange: '12 руб.', multiply: 12},
                    {name: 'RUB', exchange: '', multiply: 1}]

const MainForm = () => {

    const dispatch = useDispatch();
    const road = useSelector(state => state.road);
    const saveRoad = () => {
        let from = document.getElementById('cityChina').value;
        let to = cityRussia;
        let money = currency;
        let multiply = currencies.filter(e=> e.name === money)[0].multiply;
        dispatch({type:'ADD_ROAD', payload:{from:from, to:to, money:money, multiply:multiply}})
    }

    const refCurrency = useRef();
    let [towns, setTown] = useState([])
    let [hint, setHint] = useState(road.from ? 'go':'fill');
    let [cityRussia, setRussia] = useState(road.to ? road.to : russiaTowns[0])
    let [russiaList, setList] = useState([])
    let [currency, setCurrency] = useState(road.money? road.money : currencies[0].name)
    let [exchange, setExchange] = useState(road.money ?
        currencies.filter(e => e.name === road.money)[0].exchange : currencies[0].exchange)
    let [currencyList, setCurList] = useState([])

    const setTownList = (event) =>{
        document.getElementById('cityChina').value = event.target.innerText;
        setTown([]);
    }
    const getRus = () =>{
        document.getElementsByClassName('arrow')[0].classList.toggle('active');
        document.getElementsByClassName('russiaList')[0].classList.toggle('active');
        setList(russiaTowns.filter(e => e!== cityRussia).map(element =>
        <div key={element} onClick={() => setRus(element)}>{element}</div>))
    }
    function setRus(text) {
        document.getElementsByClassName('arrow')[0].classList.toggle('active');
        document.getElementsByClassName('russiaList')[0].classList.toggle('active');
        setTimeout(() => setList([]), 200 ) ;
        setRussia(text);
    }
    const getText = (event) =>{
        event.preventDefault();
        let text = event.target.value.toUpperCase();
        if (text.replace(/\p{Alpha}/gu, '').length === 0 && text){
            setHint('go')
            setTown(chinaTowns.filter(e => !e.toUpperCase().indexOf(text)).map((e, index) => <div key={index} onClick={setTownList}>{e}</div>))
            console.log(chinaTowns)
        } else {
            setTown([]);
            setHint('fill');
        }
    }
    const getCurrensies = () => {
        document.getElementsByClassName('arrow')[1].classList.toggle('active');
        document.getElementsByClassName('currencyList')[0].classList.toggle('active');
        setCurList(currencies.filter(e => e.name!== currency).map(element =>
            <div key={element.name} onClick={() => changeCurrency(element.name)}>{element.name}</div>))
    }
    const changeCurrency = (text)=>{
        document.getElementsByClassName('arrow')[1].classList.toggle('active');
        document.getElementsByClassName('currencyList')[0].classList.toggle('active');
        setTimeout(() => setList([]), 200 ) ;
        setCurrency(text);

        setExchange(currencies.filter(e => e.name === text)[0].exchange);
    }
    return (
        <article>
            <div className='mainText'>
                <p>Рассчитайте</p>
                <p>стоимость доставки из Китая</p>
            </div>
            <div className='mainInputs'>
                <div className="upperText">
                    <p>Откуда</p>
                    <p>Куда</p>
                    <p>Валюта</p>
                    <p>Курс</p>
                </div>
                <div className="mainInputsRow">
                    <div className='main__inputs'>
                        <input autoComplete='off' defaultValue={road.from} id='cityChina' onChange={getText}/>
                        <i/>
                        <div id='cityRussia' onClick={getRus}>
                            {cityRussia}
                            <img className='arrow' src={sel} alt="arrow"/>
                        </div>
                        <div className="russiaList">
                            {russiaList}
                        </div>
                        <i/>
                        <div ref={refCurrency} onClick={getCurrensies} id='currency'>
                            {currency}
                            <img className='arrow' src={sel} alt="arrow"/>
                        </div>
                        <div className="currencyList">
                            {currencyList}
                        </div>
                        <i/>
                        <div className="currencyEx">{exchange}</div>
                        { hint === 'fill' &&
                        <div className='select__pop'>
                            Для начала заполните поля выше
                            <img src={uarr} alt="uparrow"/>
                        </div>
                        }
                        {towns.length > 0 &&
                        <div className='townsList'>
                            {towns}
                        </div>
                        }
                    </div>

                    {hint === 'go' &&
                    <div className='go__pop'>
                        Теперь нажмите кнопку "Далее" <img src={darr} alt="downarrow"/>
                    </div>
                    }
                    {hint === 'go' ?
                        <Link to='/list'><button onClick={saveRoad} className="go">Далее <img src={rwarr} style={{marginLeft: 10}} alt="righarrow"/></button></Link>
                        :
                        <Link to='/list'><button disabled={true} onClick={saveRoad} className="go">Далее &rarr;</button></Link>
                    }
                </div>

            </div>
        </article>
    );
};

export default MainForm;