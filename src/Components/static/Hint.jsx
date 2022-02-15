import React from 'react';
import classes from "../static/Hint.module.css";
import {useDispatch} from "react-redux";
import darr from '../../img/downarr.svg'
import uarr from '../../img/uparr.svg'
import larr from '../../img/leftarr.svg'
import rarr from '../../img/rightarr.svg'

const Hint = ({num, body, style, arrow}) => {

    const dispatch = useDispatch();
    function setHint(n) {
        dispatch({type:'SET_HINT', payload: n})
    }
    return (
        <div
            className={classes.hint}
            style={{...style}}
        >
            <button
                className={classes.redCross}
                onClick={()=>setHint(num)}
            >
                &#215;
            </button>
            <p>{body}</p>
            <p>
                {arrow === 'left' && <img src={larr} alt="arrow"/>}
                {arrow === 'right' && <img src={rarr} alt="arrow"/>}
                {arrow === 'up' && <img src={uarr} alt="arrow"/>}
                {arrow === 'down' && <img src={darr} alt="arrow"/>}
            </p>
        </div>

    );
};

export default Hint;