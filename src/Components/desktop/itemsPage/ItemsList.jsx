import React, {useState} from 'react';
import classes from "./ItemsPage.module.css";
import P36 from "../UI/P/P36";
import BlueButton from "../UI/button/BlueButton";
import {useFilteredItems} from "../../../logic/itemspage";
import larr from "../../../img/leftarr.svg";
import Hint from "../UI/Hint";
import OptionsInput from "../../all/OptionsInput";

const ItemsList = ({setItem}) => {
    const [chosen, setChosen] = useState('')
    const [text, setText] = useState('')
    const [hint, setHint] = useState(true)
    const fillItem = (item) => {
        setChosen(item.id);
        setItem(item)
        setHint(false)
    }
    const itemsList = useFilteredItems(text, chosen, fillItem)
    const setSearch = () => {
        let text = document.getElementById('search').value
        setText(text)
    }
    return (
        <section className={classes.itemsList}>
            <P36>
                Выберите мебель, которую нужно перевезти
            </P36>
            <div className={classes.itemsList__search}>
                {hint &&
                <Hint
                    style={{
                        width: 460,
                        height: 90,
                        top: -10,
                        left: 600,

                    }}
                >
                    <img src={larr} alt="arrow"/>
                    <p>Введите название мебели в строку поиска или выберите мебель из предложенного списка</p>
                </Hint>
                }
                <OptionsInput
                    id='search'
                    onChange={(event) => {
                    if (!event.target.value) {
                        setText('')
                    }}}
                    placeholder='Введите название'
                    autoComplete='off'
                    variant='search'
                    type='text'
                />
                <BlueButton
                    onClick={setSearch}
                    style={{width: 114, height: 62, marginLeft: 12}}
                >
                    Поиск
                </BlueButton>
            </div>
            <div className={classes.itemsList__list}>
                {itemsList}
            </div>
        </section>
    );
};

export default ItemsList;