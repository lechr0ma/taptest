import React, {useRef, useState} from 'react';
import classes from "../SelectedItems.module.css";
import ok from '../../../img/ok.svg'
import RedCross from "../UI/button/RedCross";
import ItemDescription from "../../mobile/UI/ItemDescription";

const BasketItem = ({item, rem, set}) => {
    const refNetto = useRef();
    const refBrutto = useRef();
    const refVolume = useRef();
    const refCost = useRef();
    const refQuantity = useRef();
    const [editNetto, setNetto] = useState('show');
    let mem = [];

    function editItem(event) {
        let text = event.target.innerText;
        if (!text || +text === 0 || text.replace(/[\d]/g, '').length > 0) {
            event.target.innerText = mem[0];
            alert('Введите корректное значение(только целые числа)');
        } else {
            let props = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: +refNetto.current.innerText,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
            mem = [];
        }
    }

// get value back on error
    function setMem(e) {
        mem.push(e.target.innerText);
    }

    function setInput(e) {
        let text = prompt('Введите значение больше нуля', e.target.innerText);
        if (text.replace(/[0-9]/g, '').length === 0 && text && +text !== 0) {
            e.target.innerText = text;
            let props = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: +refNetto.current.innerText,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
        } else {
            alert('Только цифры больше нуля');
        }
    }

    function getNetto() {
        let text = document.getElementById('netto').value;
        if (text.replace(/[0-9]/g, '').length === 0 && text && +text !== 0) {
            let props = {
                quantity: +refQuantity.current.innerText,
                volume: +refVolume.current.innerText,
                netto: +text,
                brutto: +refBrutto.current.innerText,
                cost: +refCost.current.innerText
            }
            set(item, props);
            setNetto('show');
        } else {
            alert('Только цифры больше нуля');
        }
    }

    return (
        <div className={classes.item}>
            <ItemDescription
                item={item}
                variant='basket'
            />
            <div
                className={classes.options}
                ref={refQuantity}
                onClick={setInput}
            >
                {item.quantity}
            </div>
            {editNetto === 'show' &&
            <div
                className={classes.options}
                ref={refNetto}
                onClick={() => setNetto('edit')}
            >
                {item.netto}
            </div>
            }
            {editNetto === 'edit' &&
            <div className={classes.options}>
                <input
                    style={{width: "50%", height: '20px'}}
                    id='netto'
                    defaultValue={item.netto}
                    type='number'
                />
                <button
                    onClick={getNetto}
                    style={{
                        border: 'none',
                        backgroundColor: 'inherit',
                        height: 26
                    }}
                >
                    <img src={ok} alt="ok"/>
                </button>
            </div>
            }
            <div
                className={classes.options}
                ref={refBrutto}
                contentEditable='true'
                onClick={setMem}
                onBlur={editItem}
            >
                {item.brutto}
            </div>
            <div
                className={classes.options}
                ref={refVolume}
                contentEditable='true'
                onClick={setMem}
                onBlur={editItem}
            >
                {item.volume}
            </div>
            <div
                className={classes.options}
                ref={refCost}
                contentEditable='true'
                onClick={setMem}
                onBlur={editItem}
            >
                {item.cost}
            </div>
            <div className={classes.options__rem}>
                <RedCross onClick={() => rem(item)} variant='basket'/>
            </div>
        </div>
    );
};

export default BasketItem;