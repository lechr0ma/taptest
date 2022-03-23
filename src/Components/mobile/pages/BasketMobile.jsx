import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import classes from './BasketMobile.module.css';
import {useSelector} from "react-redux";
import BasketItemMobile from "../BasketItemMobile";
import MobileHeader from "../MobileHeader";
import BlueButton from "../UI/button/BlueButton";
import NoItem from "../UI/NoItem";

const BasketMobile = () => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const selected = useSelector(state => state.selected);
    const hist = useNavigate();
    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        return (
            <div className='mobile__basket'>
                <MobileHeader road={true}/>
                {selected.length > 0 &&
                <div className={classes.basket__title}>
                    Выбранная мебель ({selected.length})
                </div>
                }
                {selected.length > 0 ?
                    <div className={classes.itemsList}>
                        {selected.map(element =>
                            <BasketItemMobile
                                key={element.key}
                                item={element}
                            />)
                        }
                    </div>
                    :
                    <NoItem/>
                }
                {selected.length > 0 &&
                <div className={classes.basket__buttons}>
                    <BlueButton
                        onClick={() => hist('/total')}
                        variant='half'
                    >
                        Расчитать
                    </BlueButton>
                    <BlueButton
                        onClick={() => hist('/list')}
                        variant='half'
                    >
                        Добавить
                    </BlueButton>
                </div>
                }
            </div>

        );
    }
};

export default BasketMobile;