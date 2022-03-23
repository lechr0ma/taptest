import React from 'react';
import cl from "./pages/Itemlist.module.css";
import MobileFieldset from "./UI/fieldset/MobileFieldset";

const MobileEditField = ({edit, getValue}) => {
    return (
        <div className={cl.item__input}>
            <MobileFieldset
                item={edit}
                onChange={getValue}
                option='quantity'
                legend='Количество'
            />
            <MobileFieldset
                item={edit}
                onChange={getValue}
                option='volume'
                legend='Объем, м3'
            />
            <MobileFieldset
                item={edit}
                onChange={getValue}
                option='netto'
                legend='Масса Нетто, кг'
            />
            <MobileFieldset
                item={edit}
                onChange={getValue}
                option='brutto'
                legend='Масса брутто, кг'
            />
            <MobileFieldset
                item={edit}
                onChange={getValue}
                option='cost'
                legend='Стоимость единицы'
            />
        </div>
    );
};

export default MobileEditField;