import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const chinaTowns = ['Чунцин', 'Шанхай', 'Пекин', 'Тяньцзинь', 'Гуанчжоу', 'Чэнду', 'Шэньчжэнь', 'Дунгуань', 'Ухань', 'Шэньян' ];
const russiaTowns = ['Москва', 'Санкт-Петербург', 'Казань', 'Владивосток', 'Екатеринбург', 'Хабаровск', 'Челябинск', 'Самара', 'Нижний Новгород'];
const currencies = [{name: 'USD', exchange: '80 руб.'},
                    {name: 'CNY', exchange: '12 руб'},
                    {name: 'RUB', exchange: ''}]

const MainForm = () => {

    const dispatch = useDispatch();
    const road = useSelector(state => state.road);
    const saveRoad = () => {
        let from = document.getElementById('cityChina').value;
        let to = document.getElementById('cityRussia').value;
        let money = document.getElementById('currency').value;

        dispatch({type:'ADD_ROAD', payload:{from:from, to:to, money:money}})
        console.log(road);
    }


    const refCurrency = useRef();
    let [towns, setTown] = useState([])
    let [hint, setHint] = useState('fill');
    let [exchange, setExchange] = useState(currencies[0].exchange)

    const setTownList = (event) =>{
        document.getElementById('cityChina').value = event.target.innerText;
        setTown([]);
        setHint('go')
    }

    const getText = (event) =>{
        event.preventDefault();
        let text = event.target.value.toUpperCase();
        setHint('fill');
        if (text){
            setTown(chinaTowns.filter(e => !e.toUpperCase().indexOf(text)).map(e => <div onClick={setTownList}>{e}</div>))
            console.log(chinaTowns)
        } else {
            setTown([]);
        }
    }
    const changeCurrency = ()=>{
        let name = refCurrency.current.value;
        setExchange(currencies.filter(e => e.name === name)[0].exchange);
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
                        <input autoComplete='off' placeholder={road.from} id='cityChina' onChange={getText}/>
                        <i/>
                        <select id='cityRussia'>{russiaTowns.map(element => <option>{element}</option>)}</select>
                        <i/>
                        <select ref={refCurrency} onChange={changeCurrency} id='currency'>{currencies.map(e => <option>{e.name}</option>)}</select>
                        <i/>
                        <div className="currencyEx">{exchange}</div>
                        { hint === 'fill' &&
                        <div className='select__pop'>
                            Для начала заполните поля выше &uarr;
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
                        Теперь нажмите кнопку "Далее" &darr;
                    </div>
                    }
                    {hint === 'go' ?
                        <Link to='/list'><button onClick={saveRoad} className="go">Далее &rarr;</button></Link>
                        :
                        <Link to='/list'><button disabled={true} onClick={saveRoad} className="go">Далее &rarr;</button></Link>
                    }
                </div>

            </div>
        </article>
    );
};

export default MainForm;