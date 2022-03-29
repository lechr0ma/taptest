import React, {useState} from 'react';
import classes from "../../pages/main/mainStyle.module.css";
import {useSelector} from "react-redux";
import TownList from "../select/divselect/TownList";

const MainInputMobile = ({arr, road, setRoad, title, fill, hint, option}) => {
    const savedRoad = useSelector(state => state.road)
    const [townsList, setList] = useState([])
    const getText = (event) => {
        event.preventDefault();
        let text = event.target.value;
        setRoad({...road, [option]: text})
        if (text && text.replace(/\p{Alpha}/gu, '').length === 0) {
            setList(arr.filter(e => !e.toUpperCase().indexOf(text.toUpperCase())));
            fill(true);
            hint(false);
        } else {
            fill(false);
            setList([])
        }
    }

    function setTown(text) {
        setRoad({...road, [option]: text});
        setList([]);
    }

    return (
        <div className={classes.input}>
            <p className={classes.input__title}>{title}</p>
            <input
                value={road[option]}
                autoComplete='off'
                placeholder={savedRoad.from}
                id='cityChinaMobile'
                onChange={getText}
                className={classes.inputForm}
            />
            {townsList.length > 0 &&
            <div className={classes.input__list}>
                <TownList townsList={townsList} setTown={setTown}/>
            </div>
            }
        </div>
    );
};

export default MainInputMobile;