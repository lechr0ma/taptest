import React, {useState} from 'react';
import cl from './Itemlist.module.css';
import ItemMobile from "./ItemMobile";
import {itemsMass} from "../../../../logic/staticData";
import MobileHeader from "../../header/MobileHeader";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const ItemListMobile = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected)
    let selectedId = () => {
        let arr = [];
        if (selected.length) {
            selected.forEach(e => {
                arr.push(e.id)
            })
            return itemsMass.filter(e => arr.indexOf(e.id) < 0)
        } else {
            return itemsMass
        }
    }
    const [items, setItems] = useState(selectedId().map(element =>
        <ItemMobile item={element} key={element.id}/>
    ));

    function filter(e) {
        let filterItems = selectedId().filter(element => element.description.includes(e));
        setItems(filterItems.map(element => <ItemMobile item={element} key={element.id}/>));
    }

    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        return (
            <div className='mobile__list'>
                <MobileHeader search={true} goback={true} filter={filter}/>
                <div className={cl.list__wrapper}>
                    {items}
                </div>

            </div>
        );
    }
};

export default ItemListMobile;