import React, {useRef, useState} from 'react';
import classes from "./SelectedItems.module.css";

const BasketItem = ({item, rem, set}) => {
        const refNetto = useRef();
        const refBrutto = useRef();
        const refVolume = useRef();
        const refCost = useRef();
        const refQuantity = useRef();
        const [editNetto, setNetto] = useState('show');
        let mem;
        function editItem(event) {
            let text = event.target.innerText;
            if (text.replace(/\d/g,'').length > 0){
                event.target.innerText = mem;
                alert('Ввести можно только цифры');
            }else {
            let props  = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: +refNetto.current.innerText,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
        }}
        function setMem(e){
            mem = e.target.innerText;
            console.log(mem)
        }
        function setInput(e) {
                let text = prompt('Введите значение', e.target.innerText);
            if (text.replace(/\d/g,'').length == 0){
                e.target.innerText = text;
                let props  = {
                    quantity: +refQuantity.current.innerText,
                    volume: +refVolume.current.innerText,
                    netto: +refNetto.current.innerText,
                    brutto: +refBrutto.current.innerText,
                    cost: +refCost.current.innerText
                }
                set(item, props);
            }else{
                alert('Только цифры');
            }
        }
        function getNetto() {
            let text = document.getElementById('netto').value;
            let props  = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: text,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
            setNetto('show');
            console.log(editNetto)
        }
    return (
        <div className={classes.item}>
            <div className={classes.item__description}>
                <img src={item.image} alt="Фото"/>
                <p>{item.description}</p>
            </div>
            <div className={classes.quantity} ref={refQuantity} onClick={setInput}>{item.quantity}</div>

                {editNetto === 'show' && <div className={classes.netto} ref={refNetto} onClick={()=> setNetto('edit')} >{item.netto}</div>}
                {editNetto === 'edit' && <div className={classes.netto__input}><input style={{width:"50%"}} id='netto' defaultValue={item.netto} type='number'/><button onClick={getNetto}>ok</button></div>}


            <div className={classes.brutto} ref={refBrutto} contentEditable='true' onClick={setMem} onBlur={editItem}>{item.brutto}</div>
            <div className={classes.volume} ref={refVolume} contentEditable='true' onClick={setMem} onBlur={editItem}>{item.volume}</div>
            <div className={classes.cost} ref={refCost} contentEditable='true' onClick={setMem} onBlur={editItem}>{item.cost}</div>
            <div className={classes.remove}><button onClick={() => rem(item)}><h2>&#215;</h2></button></div>
        </div>
    );
};

export default BasketItem;