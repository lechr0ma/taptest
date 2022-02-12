import React from 'react';
import classes from './Item.module.css';


const Item = ({item, img, rem, description, showBtn, get, id}) => {

    return (
        <div className={classes.container}>
            <img src={img} alt='image'/>
            <p>{description}</p>
            {showBtn && !get &&<button className={classes.blueButton} onClick={(event)=> rem(item, id)}>Выбрать</button>}
            {showBtn && get && <button className={classes.whiteButton}>Выбрано</button>}
        </div>
    );
};

export default Item;