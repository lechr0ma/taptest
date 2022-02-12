import React, {useState} from 'react';
import classes from "./mainStyle.module.css";
import img from "../../img/logo.png";
import menu from "../../img/Menu.svg";
import LeftMenu from "./LeftMenu";
import back from "../../img/Back.svg";
import cl from "./Itemlist.module.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const Header = (props) => {
    const [show, setShow] = useState(false);
    const road = useSelector(state => state.road);
    function trigMenu() {
        setShow(false);
        console.log(show);
    }
    const hist = useNavigate();
    return (
        <div className={classes.header}>
            {props.logo && <img src={img} alt='logo'/>}
            {props.goback && <button onClick={()=>hist(-1)}><img src={back} alt="Back"/></button>}
            {props.search && <input placeholder='Поиск....' onChange={event => props.filter(event.target.value)} className={cl.search} type="text"/>}
            {props.road && <button className={classes.road} onClick={() => hist('/')}><p>{road.from}&larr;{road.to}, {road.money}</p></button>}
            <button onClick={()=>setShow(true)}><img src={menu} alt='menu'/></button>
            <LeftMenu show={show} rem={trigMenu}/>
        </div>
    );
};

export default Header;