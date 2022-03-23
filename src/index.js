import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";


const defaultState = {
        road: {from:'', to:'', money: '', exchange:'', multiply: 1},
        selected: [],
        hints: [true, true, true, true, true, true, true]
}
const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'ADD_ROAD':
            return {...state, road: {from: action.payload.from, to: action.payload.to, money: action.payload.money, multiply: action.payload.multiply}};
        case 'SET_HINT':
            return {...state, hints: state.hints.map((item, index) => index === action.payload ? !item : item)};
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

const app =
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>;

ReactDOM.render(
    app,
  document.getElementById('root')
);

