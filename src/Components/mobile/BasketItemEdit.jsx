import React, {useState} from 'react';
import cl from "./Itemlist.module.css";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";

const BasketItemEdit = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected);
    const hist = useNavigate();
    const link = useParams();
    const dispatch = useDispatch();
    let item = selected.filter(e => e.key === +link.id)[0];
    const [edit, setEdit] = useState( item );
    function getValue(e, name) {
        setEdit({...edit, [name]: e.target.value})
    }
    function submit() {
        let err = [];
        for (let key in edit){
            if (edit[key]<1) {
                err.push(key)
            }
        }
        if (err.length === 0){
            dispatch({type: 'EDIT_ITEM', payload: {key: item.key, value: edit}});
            hist('/basket');
        }else {
            alert('Введите корректные значения')
        }
    }
    if (!isRoad){
        return <Navigate to='/'/>
    }else{
        return (
        <div className={cl.container__options}>
            <Header goback={true}/>
            <div className={cl.item__current}>
                <img src={item.image} alt=""/>
                <p>{item.description}</p>
            </div>
            <div className={cl.item__input}>
                <fieldset>
                    <legend>Количество:</legend>
                    <input  defaultValue={edit.quantity} onChange={e => {getValue(e, "quantity")}}  type="number" placeholder='Кол-во'/>
                </fieldset>
                <fieldset>
                    <legend>Объем, м3</legend>
                    <input value={edit.volume} onChange={e => {getValue(e, "volume")}} type="number" placeholder='Общий объем, м3'/>
                </fieldset>
                <fieldset>
                    <legend>Масса Нетто</legend>
                    <input value={edit.netto} onChange={e => {getValue(e, "netto")}} type="number" placeholder='Масса Нетто, кг'/>
                </fieldset>
                <fieldset>
                    <legend>Масса Брутто</legend>
                    <input value={edit.brutto} onChange={e => {getValue(e, "brutto")}} type="number" placeholder='Масса Брутто, кг'/>
                </fieldset>
                <fieldset>
                    <legend>Стоимость</legend>
                    <input value={edit.cost} onChange={e => {getValue(e, "cost")}} type="number" placeholder='Стоимость единицы'/>
                </fieldset>
            </div>
            <div className={cl.item__buttons}>
                <button onClick={() => hist(-1)}>Назад</button>
                <button onClick={submit}>Сохранить</button>
            </div>

        </div>
    );
}};

export default BasketItemEdit;