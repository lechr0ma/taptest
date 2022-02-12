import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import MobileApp from "./Components/mobile/MobileApp";

const mobileAgent = ['Android', 'iPhone', 'iPad', 'iPod']

const defaultState = {
        road: {from:'', to:'', money: ''},
        selected: [],
        hints: [true, true, true, true, true, true, true]
        // hints: {
        //          hintNav: true,
        //         hintOptionsFill: true,
        //         hintOptionsReset: true,
        //         hintBasketReset: true,
        //         hintBasketEdit: true,
        //         hintBasketTotal: true,
        //         hintTotalMes: true
        //     }
}
const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'ADD_ROAD':
            return {...state, road: {from: action.payload.from, to: action.payload.to, money: action.payload.money}};
        case 'SET_HINT':
            return {...state, hints: state.hints.map((item, index) => index == action.payload ? !item : item)};
        case 'ADD_ITEM':
            return {...state, selected: state.selected.concat(action.payload)};
        case 'REMOVE_ITEM':
            return {...state, selected: state.selected.filter(element => element.key !== action.payload.key)};
        case 'EDIT_ITEM':
            return {...state, selected: state.selected.map(e => e.key === action.payload.key ? {...e,
                    quantity: action.payload.value.quantity,
                    netto: action.payload.value.netto,
                    brutto: action.payload.value.brutto,
                    volume: action.payload.value.volume,
                    cost: action.payload.value.cost} : e )}
        case 'RESET_SELECTED':
            return {...state, selected: []}
        default:
            return state;
    }
}
const store = createStore(reducer);
let isMobile = false;
for (let i = 0; i < mobileAgent.length; i++){
    if(navigator.userAgent.includes(mobileAgent[i]) && window.innerWidth < 1200){
        isMobile = true;
    }
}
console.log(isMobile);
window.addEventListener('resize', ()=> console.log(window.innerWidth));
const app =<Provider store={store}>
    <BrowserRouter>
        {isMobile? <MobileApp/>:<App/>}
            </BrowserRouter></Provider>;

ReactDOM.render(
    app,
  document.getElementById('root')
);

