import React from 'react';
import classes from "../../../pages/main/mainStyle.module.css";
import Town from "./Town";

const TownList = ({townsList, setTown}) => {
    return (
        <div
            className={classes.input__list}
        >
            {townsList.map(e =>
                <Town
                    item={e}
                    key={e}
                    setTown={setTown}
                />)}
        </div>
    );
};

export default TownList;