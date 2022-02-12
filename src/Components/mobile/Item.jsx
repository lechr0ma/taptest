import React from 'react';
import img from "../../img/logo.png";
import item from "../../img/item.png";
import {useNavigate} from "react-router-dom";

const ItemMobile = (props) => {
    const history = useNavigate();
    const path = '/item/'+props.id;
    return (
        <div className={props.className}>
            <img src={props.img} alt="item"/>
            <p>{props.description}</p>
            <button onClick={()=>history(path)}>Добавить</button>
        </div>
    );
};

export default ItemMobile;