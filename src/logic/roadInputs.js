import {chinaTowns, currencies, russiaTowns} from "./staticData";


export const getText = (event, setHint, setChinaList) => {
    event.preventDefault();
    let text = event.target.value.toUpperCase();
    if (text.replace(/\p{Alpha}/gu, '').length === 0 && text) {
        setHint('go')
        setChinaList(chinaTowns
            .filter(e => !e.toUpperCase().indexOf(text))
            .map((e) => {
                    return {value: e, onclick: (e) => setTownList(e)}
                }
            ))
    } else {
        setChinaList([]);
        setHint('fill');
    }
    const setTownList = (event) => {
        document.getElementById('cityChina').value = event.target.innerText;
        setChinaList([]);
    }
}
export const getRus = (cityRussia, setRussia, setRuList) => {
    document.getElementsByClassName('arrow')[0].classList.toggle('active');
    document.getElementsByClassName('russiaList')[0].classList.toggle('active');
    setRuList(russiaTowns
        .filter(e => e.name !== cityRussia)
        .map(element => {
                return {value: element.name, onclick: (event) => setRus(event, element.name)}
            }
        )
    )

    function setRus(event, text) {
        event.stopPropagation()
        document.getElementsByClassName('arrow')[0].classList.toggle('active');
        document.getElementsByClassName('russiaList')[0].classList.toggle('active');
        setTimeout(() => setRuList([]), 200);
        setRussia(text);
    }
}
export const getCurrensies = (currency, setCurrency, setCurList) => {
    document.getElementsByClassName('arrow')[1].classList.toggle('active');
    document.getElementsByClassName('currencyList')[0].classList.toggle('active');
    setCurList(currencies
        .filter(e => e.name !== currency)
        .map((element) => {
            return {value: element.name, onclick: (event) => changeCurrency(event, element.name)}
        }))
    const changeCurrency = (event, text) => {
        event.stopPropagation()
        document.getElementsByClassName('arrow')[1].classList.toggle('active');
        document.getElementsByClassName('currencyList')[0].classList.toggle('active');
        setTimeout(() => setCurList([]), 200);
        setCurrency(text);

    }
}
export const saveRoad = (dispatch, cityRussia, currency, callback) => {
    let from = document.getElementById('cityChina').value;
    let multiply = currencies.filter(e => e.name === currency)[0].multiply;
    dispatch({type: 'ADD_ROAD', payload: {from: from, to: cityRussia, money: currency, multiply: multiply}});
    callback();
}


