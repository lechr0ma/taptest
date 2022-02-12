import React, {useState} from 'react';
import cl from "./Itemlist.module.css";
import img from "../../img/logo.png";
import back from "../../img/Back.svg";
import menu from "../../img/Menu.svg";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./Header";

const BasketItemEdit = () => {
    const selected = useSelector(state => state.selected);
    const hist = useNavigate();
    const link = useParams();
    const dispatch = useDispatch();
    let item = selected.filter(e => e.key == link.id)[0];
    console.log(item);
    const [edit, setEdit] = useState( item );
    function submit() {
        dispatch({type: 'EDIT_ITEM', payload: {key: item.key, value: edit}});
        hist('/basket') ;
        console.log(edit);
    }
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
                    <input  defaultValue={edit.quantity} onChange={e => setEdit({...edit, quantity: e.target.value} )} type="number" placeholder='Кол-во'/>
                </fieldset>
                <fieldset>
                    <legend>Объем, м3</legend>
                    <input value={edit.volume} onChange={e => setEdit({...edit, volume:e.target.value }) } type="number" placeholder='Общий объем, м3'/>
                </fieldset>
                <fieldset>
                    <legend>Масса Нетто</legend>
                    <input value={edit.netto} onChange={e => setEdit({...edit, netto:e.target.value }) } type="number" placeholder='Масса Нетто, кг'/>
                </fieldset>
                <fieldset>
                    <legend>Масса Брутто</legend>
                    <input value={edit.brutto} onChange={e => setEdit({...edit, brutto:e.target.value }) } type="number" placeholder='Масса Брутто, кг'/>
                </fieldset>
                <fieldset>
                    <legend>Стоимость</legend>
                    <input value={edit.cost} onChange={e => setEdit({...edit, cost:e.target.value }) } type="number" placeholder='Стоимость единицы'/>
                </fieldset>
            </div>
            <div className={cl.item__buttons}>
                <button onClick={() => hist(-1)}>Назад</button>
                <button onClick={submit}>Сохранить</button>
            </div>

        </div>
    );
};

export default BasketItemEdit;