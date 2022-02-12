import React, {useState} from 'react';
import cl from  './Itemlist.module.css';
import ItemMobile from "./Item";
import {itemsMass} from "../../App";
import Header from "./Header";


const ItemListMobile = () => {
    const [items, setItems] = useState(itemsMass.map(element =>
        <ItemMobile className={cl.item} id={element.id} key={element.id} img={element.image} description={element.description}/>
        ));
    function filter(e) {
        let filterItems = itemsMass.filter(element => element.description.includes(e));
        setItems(filterItems.map(element => <ItemMobile className={cl.item} id={element.id} key={element.id} img={element.image} description={element.description}/> ));
    }
    return (
        <div className={cl.container}>
            <Header search={true} goback={true} filter={filter}/>
            <div className={cl.list__wrapper}>
                {items}
            </div>

        </div>
    );
};

export default ItemListMobile;