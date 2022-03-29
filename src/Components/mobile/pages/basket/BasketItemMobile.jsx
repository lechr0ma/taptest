/** @jsxImportSource @emotion/react */
import React from 'react';
import classes from './BasketMobile.module.css'
import {useDispatch, useSelector} from "react-redux";
import edit from '../../../../img/editMobile.svg';
import del from '../../../../img/deleteMobile.svg';
import {Navigate, useNavigate} from "react-router-dom";
import ItemOptions from "../../UI/ItemOptions";
import OptionsButton from "../../UI/button/OptionsButton";
import {css} from "@emotion/react";

const BasketItemMobile = ({item}) => {
    const road = useSelector(state => state.road);
    const isRoad = !!road.from;
    const hist = useNavigate();
    const dispatch = useDispatch();

    function delItem() {
        dispatch({type: 'REMOVE_ITEM', payload: item});
    }

    if (!isRoad) {
        return <Navigate to='/'/>
    } else {
        return (
            <div className={classes.basket__item}>
                <div className={classes.basket__description}>
                    <img css={css(`
                            border: 1px solid #E2E4EA;
                            box-sizing: border-box;
                            width: 108px;
                            height: 58px;`)}
                         src={item.image}
                         alt="Диван"
                    />
                    <p css={css(`
                        width: 40%;
                        text-align: center;
                        padding: 0 10px;
                        `)}
                    >
                        {item.description}
                    </p>
                    <OptionsButton
                        onClick={() => hist('/edit/' + item.key)}
                        image={edit}
                    />
                    <OptionsButton
                        onClick={delItem}
                        image={del}
                    />
                </div>
                <ItemOptions item={item}/>
            </div>
        );
    }
};

export default BasketItemMobile;