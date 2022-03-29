import React, {useState} from 'react';
import classes from "../../../pages/main/mainStyle.module.css";
import TownList from "./TownList";

const DivSelect = ({arr, title, option, road, setRoad, disabled}) => {
    const [optionList, setList] = useState([])

    function getOptions() {
        setList(arr.filter(e => e.name !== road[option]).map(e => e.name))
    }

    function setOption(text) {
        setRoad({...road, [option]: text})
        setList([])
    }

    if (disabled) {
        return (
            <div className={classes.input}>
                <p className={classes.input__title}>{title}</p>
                <div
                    className={[classes.inputForm, classes.input__div__disabled].join(' ')}
                >
                    {road[option]}
                </div>

            </div>
        )
    }
    return (
        <div className={classes.input}>
            <p className={classes.input__title}>{title}</p>
            <div
                className={[classes.inputForm, classes.input__div].join(' ')}
                onClick={getOptions}
            >
                {road[option]}
            </div>
            {optionList.length > 0 && <TownList townsList={optionList} setTown={setOption}/>}
        </div>
    );
};

export default DivSelect;