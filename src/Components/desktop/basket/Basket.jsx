import React from 'react';
import classes from './Basket.module.css';
import SelectedItems from "../SelectedItems";
import {useSelector} from "react-redux";
import GlobalHint from "../UI/GlobalHint";
import P36 from "../UI/P/P36";
import BasketColumns from "./BasketColumns";

const Basket = ({title}) => {
    const selected = useSelector(state => state.selected);
    const hints = useSelector(state => state.hints);

    return (
        <section className='basket__container'>
            {title &&
            <div className={classes.title}>
                <P36>Добавленная мебель ({selected.length})</P36>
            </div>
            }
            <div className={classes.table}>
                {hints[3] &&
                <GlobalHint
                    body='Чтобы отредактировать  введенные ланные, просто нажмите на поле'
                    num={3}
                    style={{
                        width: 640,
                        height: 55,
                        left: '40%',
                        top: -80
                    }}
                />
                }
                <BasketColumns/>
                <SelectedItems/>
            </div>
        </section>
    );
};

export default Basket;