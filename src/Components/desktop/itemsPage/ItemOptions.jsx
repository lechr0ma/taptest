import React, {useEffect, useState} from 'react';
import classes from "./ItemsPage.module.css";
import GlobalHint from "../UI/GlobalHint";
import P36 from "../UI/P/P36";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ItemDescription from "../../mobile/UI/ItemDescription";
import OptionsInput from "../../all/OptionsInput";
import Counter from "./Counter";
import BlueButton from "../UI/button/BlueButton";

const ItemOptions = ({item, isItem}) => {
    const road = useSelector(state => state.road)
    const dispatch = useDispatch();
    const hist = useNavigate()
    const hintShow = useSelector(state => state.hints);
    const [currentItem, setItem] = useState({
        quantity: 1,
        volume: '',
        netto: '',
        brutto: '',
        cost: '',
    })

    function resetItem() {
        setItem({
            quantity: 1,
            volume: '',
            netto: '',
            brutto: '',
            cost: '',
        })
    }

    useEffect(resetItem, [item])

    function addItem() {
        dispatch({
            type: 'ADD_ITEM', payload: {
                key: Date.now(),
                id: item.id,
                image: item.image,
                description: item.description,
                quantity: currentItem.quantity,
                netto: currentItem.netto,
                brutto: currentItem.brutto,
                volume: currentItem.volume,
                cost: currentItem.cost,
                multiply: road.multiply
            }
        })
        hist('/basket')
    }

    return (
        <section className={classes.itemOption}>
            <P36>Затем заполните следующие поля выбранного элемента:</P36>
            {!isItem ?
                <div className={classes.noItems}>Вы пока не выбрали ни одного элемента.</div>
                :
                <div className={classes.item__options}>
                    <div className={classes.currentItem}>
                        {hintShow[1] && <GlobalHint
                            body='Теперь заполните поля для этого элемента'
                            num={1}
                            arrow='down'
                            style={{
                                flexDirection: 'row-reverse',
                                top: -70,
                                width: 460,
                                height: 55,
                            }}/>
                        }
                        <ItemDescription item={item} variant='desktop'/>
                    </div>
                    <Counter
                        currentItem={currentItem}
                        setItem={setItem}
                    />
                    <OptionsInput
                        value={currentItem.volume}
                        type="number"
                        min={1}
                        onChange={event => setItem({...currentItem, volume: event.target.value})}
                        placeholder="Объем, м3"
                        variant='options'
                    />
                    <OptionsInput
                        value={currentItem.netto}
                        type="number"
                        min={1}
                        onChange={event => setItem({...currentItem, netto: event.target.value})}
                        placeholder="Масса Нетто, кг"
                        variant='options'
                    />
                    <OptionsInput
                        value={currentItem.brutto}
                        type="number" min={1}
                        onChange={event => setItem({...currentItem, brutto: event.target.value})}
                        placeholder="Масса Брутто, кг"
                        variant='options'
                    />
                    <OptionsInput
                        value={currentItem.cost}
                        type="number"
                        min={1}
                        onChange={event => setItem({...currentItem, cost: event.target.value})}
                        placeholder="Стоимость в выбранной валюте"
                        variant='options'
                    />
                    {hintShow[2] && <GlobalHint
                        body='Здесь вы можете сбросить параметры и добавить элемент'
                        arrow='right'
                        num={2}
                        style={{
                            bottom: 10,
                            width: 580,
                            left: -650,
                            height: 55,
                        }}/>
                    }
                    <div className={classes.optionBtns}>
                        <BlueButton
                            onClick={resetItem}
                            style={{width: 210, height: 60, marginLeft: 12}}
                        >
                            Сбросить
                        </BlueButton>
                        {+currentItem.netto && +currentItem.brutto && +currentItem.cost && +currentItem.volume ?
                            <BlueButton
                                onClick={addItem}
                                style={{width: 210, height: 60, marginLeft: 12}}
                            >
                                Добавить
                            </BlueButton>
                            :
                            <BlueButton
                                onClick={() => alert('Сначала заполните поля!')}
                                style={{width: 210, height: 60, marginLeft: 12}}
                            >
                                Заполните поля
                            </BlueButton>
                        }
                    </div>
                </div>}
        </section>
    );
};

export default ItemOptions;