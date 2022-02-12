import React, {useRef} from 'react';
import classes from "./SelectedItems.module.css";

const BasketItem = ({item, rem, set}) => {
        const refNetto = useRef();
        const refBrutto = useRef();
        const refVolume = useRef();
        const refCost = useRef();
        const refQuantity = useRef();
        function editItem() {
            let props  = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: +refNetto.current.innerText,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
        }
    return (
        <div className={classes.item}>
            <div className={classes.item__description}>
                <img src={item.image} alt="Фото"/>
                <p>{item.description}</p>
            </div>
            <div className={classes.quantity} ref={refQuantity} contentEditable='true' onBlur={editItem}>{item.quantity}</div>
            <div className={classes.netto} ref={refNetto} contentEditable='true' onBlur={editItem}>{item.netto}</div>
            <div className={classes.brutto} ref={refBrutto} contentEditable='true' onBlur={editItem}>{item.brutto}</div>
            <div className={classes.volume} ref={refVolume} contentEditable='true' onBlur={editItem}>{item.volume}</div>
            <div className={classes.cost} ref={refCost} contentEditable='true' onBlur={editItem}>{item.cost}</div>
            <div className={classes.remove}><button onClick={() => rem(item)}><h2>&#215;</h2></button></div>
        </div>
    );
};

export default BasketItem;