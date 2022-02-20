import React, {useState} from 'react';
import cl from  './Itemlist.module.css';
import ItemMobile from "./Item";
import {itemsMass} from "../../App";
import Header from "./Header";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const ItemListMobile = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected)
    let selectedId = () => {
        let arr = [];
        if (selected.length){
            selected.forEach(e => {arr.push(e.id)})
            return itemsMass.filter(e=> arr.indexOf(e.id) < 0)
        }else {
            return itemsMass}
    }
    const [items, setItems] = useState(selectedId().map(element =>
        <ItemMobile className={cl.item} id={element.id} key={element.id} img={element.image} description={element.description}/>
    ));
    function filter(e) {
        let filterItems = selectedId().filter(element => element.description.includes(e));
        setItems(filterItems.map(element => <ItemMobile className={cl.item} id={element.id} key={element.id} img={element.image} description={element.description}/> ));
    }
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
    return (
        <div className={cl.container}>
            <Header search={true} goback={true} filter={filter}/>
            <div className={cl.list__wrapper}>
                {items}
            </div>

        </div>
    );
}};

export default ItemListMobile;