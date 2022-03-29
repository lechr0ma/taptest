import React, {useState} from 'react';
import cl from "../itemOptions/itemOptions.module.css";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MobileHeader from "../../header/MobileHeader";
import MobileEditField from "./MobileEditField";
import ItemDescription from "../../UI/ItemDescription";
import BlueButton from "../../UI/button/BlueButton";

const BasketItemEdit = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected);
    const hist = useNavigate();
    const link = useParams();
    const dispatch = useDispatch();
    let item = selected.find(e => e.key === +link.id);
    const [edit, setEdit] = useState(item);


    function submit() {
        let err = [];
        for (let key in edit) {
            if (edit[key] < 1) {
                err.push(key)
            }
        }
        if (err.length === 0) {
            dispatch({type: 'EDIT_ITEM', payload: {key: item.key, value: edit}});
            hist('/basket');
        } else {
            alert('Введите корректные значения')
        }
    }

    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        return (
            <div className='mobile__edit'>
                <MobileHeader goback={true}/>
                <ItemDescription
                    item={item}
                    variant='mobile'
                />
                <MobileEditField
                    edit={edit}
                    getValue={setEdit}
                />
                <div className={cl.options__buttons}>
                    <BlueButton
                        onClick={() => hist(-1)}
                        variant='full'
                    >
                        Назад
                    </BlueButton>
                    <BlueButton
                        onClick={submit}
                        variant='full'
                    >
                        Сохранить
                    </BlueButton>
                </div>

            </div>
        );
    }
};

export default BasketItemEdit;