import React from 'react';
import classes from "../../../pages/main/mainStyle.module.css";

const Town = ({item, setTown}) => {
    return (
        <div className={classes.listItem} onClick={() => setTown(item)}>{item}</div>
    );
};

export default Town;