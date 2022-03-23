import React, {useState} from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {itemsMass} from "../../../logic/staticData";
import cl from "./Itemlist.module.css";
import {useDispatch, useSelector} from "react-redux";
import MobileHeader from "../MobileHeader";
import ItemDescription from "../UI/ItemDescription";
import OptionInput from "../UI/input/OptionInput";
import BlueButton from "../UI/button/BlueButton";

const ItemOptionsMobile = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const hist = useNavigate();
    const link = useParams();
    const dispatch = useDispatch();
    const item = itemsMass.find(e => e.id === +link.id);
    const [select, setSelect] = useState({
        key: Date.now(),
        id: item.id,
        image: item.image,
        description: item.description,
        quantity: '',
        volume: '',
        netto: '',
        brutto: '',
        cost: '',
    });

    function submit() {
        dispatch({type: 'ADD_ITEM', payload: select});
        hist('/basket');
    }

    function reset() {
        setSelect({
            key: Date.now(),
            id: item.id,
            image: item.image,
            description: item.description,
            quantity: '',
            volume: '',
            netto: '',
            brutto: '',
            cost: '',
        })
    }

    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        return (
            <div className='mobile__options'>
                <MobileHeader goback={true}/>
                <ItemDescription item={item} variant='mobile'/>
                <div className={cl.item__input}>
                    <OptionInput
                        select={select}
                        setSelect={setSelect}
                        option='quantity'
                        title='Кол-во'
                    />
                    <OptionInput
                        select={select}
                        setSelect={setSelect}
                        option='volume'
                        title='Общий объем, м3'
                    />
                    <OptionInput
                        select={select}
                        setSelect={setSelect}
                        option='netto'
                        title='Масса Нетто, кг'
                    />
                    <OptionInput
                        select={select}
                        setSelect={setSelect}
                        option='brutto'
                        title='Масса Брутто, кг'
                    />
                    <OptionInput
                        select={select}
                        setSelect={setSelect}
                        option='cost'
                        title='Стоимость единицы'
                    />
                </div>
                <div className={cl.item__buttons}>
                    <BlueButton
                        onClick={reset}
                        variant='full'
                    >
                        Сбросить
                    </BlueButton>
                    {select.quantity > 0 && select.volume > 0 && select.netto > 0 && select.brutto > 0 && select.cost > 0 ?
                        <BlueButton
                            onClick={submit}
                            variant='full'
                        >
                            Продолжить
                        </BlueButton>
                        :
                        <BlueButton
                            disabled={true}
                            onClick={submit}
                            variant='full'
                        >
                            Заполните поля для добавления товара
                        </BlueButton>}

                </div>

            </div>
        );
    }
};

export default ItemOptionsMobile;