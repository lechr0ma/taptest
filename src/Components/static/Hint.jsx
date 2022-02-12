import React from 'react';
import classes from "../static/Hint.module.css";
import {useDispatch} from "react-redux";

const Hint = ({num, body, style}) => {

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
        </div>

    );
};

export default Hint;