import React from 'react';
import classes from './SelectedItems.module.css';
import BasketItem from "./basket/BasketItem";
import {useDispatch, useSelector} from "react-redux";

const SelectedItems = () => {
    const selected = useSelector(state => state.selected)
    const dispatch = useDispatch();
    function removeItem(item) {
        dispatch({type:'REMOVE_ITEM', payload: item})
    }
    function set(item, props) {
        dispatch({type: 'EDIT_ITEM', payload: {key: item.key, value: props} });
    }
    return (
        <div className={classes.container}>
            {selected.map(element =>
            <BasketItem key={element.key} item={element} rem={removeItem} set={set} />)}
        </div>
    );
};

export default SelectedItems;