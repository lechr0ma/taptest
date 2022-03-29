import React, {useState} from 'react';
import classes from "./mobileHeader.module.css";
import img from "../../../img/logo.png";
import menu from "../../../img/Menu.svg";
import LeftMenu from "./LeftMenu";
import back from "../../../img/Back.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import ImageButton from "../UI/button/ImageButton";


const MobileHeader = (props) => {
    const [show, setShow] = useState(false);
    const road = useSelector(state => state.road);

    function trigMenu() {
        setShow(false);
    }

    const hist = useNavigate();
    return (
        <header className='mobile__header'>
            {props.logo && <img
                src={img}
                alt='logo'
            />}
            {props.goback
            &&
            <ImageButton
                onClick={() => hist(-1)}
                image={back}
                alt='Back'
            />}
            {props.search
            &&
            <input
                placeholder='Поиск....'
                onChange={event => props.filter(event.target.value)}
                className={classes.header__search}
                type="text"
            />
            }
            {props.road && <button
                className={classes.header__road}
                onClick={() => hist('/')}
            >
                <p>{road.from}&larr;{road.to}, {road.money}</p>
            </button>
            }
            <ImageButton
                onClick={() => setShow(true)}
                image={menu}
                alt='menu'
            />
            <LeftMenu
                show={show}
                rem={trigMenu}
            />
        </header>
    );
};

export default MobileHeader;