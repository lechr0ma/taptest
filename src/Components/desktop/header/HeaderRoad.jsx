/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import GlobalHint from "../UI/GlobalHint";
import {useDispatch, useSelector} from "react-redux";
import editImg from "../../../img/edit.svg";
import okImg from "../../../img/ok.svg";
import VertLine from "../UI/VertLine";
import MainInput from "../UI/input/MainInput";
import {getCurrensies, getRus, getText, saveRoad} from "../../../logic/roadInputs";
import MainSelect from "../UI/select/MainSelect";
import {css} from "@emotion/react";

const HeaderRoad = () => {
    const roadMap = useSelector(state => state.road);
    const hints = useSelector(state => state.hints);
    const dispatch = useDispatch();

    const [chinaList, setChinaList] = useState([]);
    const [edit, setEdit] = useState('string');
    const [cityRussia, setRussia] = useState(roadMap.to)
    const [russiaList, setRuList] = useState([])
    const [currency, setCurrency] = useState(roadMap.money)
    const [currencyList, setCurList] = useState([])
    let [hint, setHint] = useState(roadMap.from ? 'go' : 'fill');

    const active = css(`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 360px;
        background: #FFFFFF;
        box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 17px;
        color: #606F7A;`)

    const editCss = css(`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 370px;
        background: #FFFFFF;
        box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 15px;
        color: #606F7A;`)
    const string = css(`
        width: 300px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background: inherit;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 17px;
        color: #606F7A;`)

    const button = css(`
        border: 0;
        height: 100%;
        background: inherit;
        border-radius: 5px;
        cursor: pointer;`)

    let road;
    if (edit === 'string') {
        road = <div css={string} onMouseOver={() => setEdit('div')}>
            {roadMap.from} &rarr; {roadMap.to}, {roadMap.money}
        </div>
    } else if (edit === 'div') {
        road = <div css={active} onMouseLeave={() => setEdit('string')}>
            {roadMap.from} &rarr; {roadMap.to}, {roadMap.money}
            <button
                css={button}
                onClick={() => setEdit('select')}
            >
                <img src={editImg} alt="edit"/>
            </button>
        </div>
    } else if (edit === 'select') {
        road = <div css={editCss}>
            <MainInput
                onChange={(e) => getText(e, setHint, setChinaList)}
                defaultValue={roadMap.from}
                id='cityChina'
                autoComplete='off'
                options={chinaList}
                variant='header'
            />
            <VertLine/>
            <MainSelect
                onClick={() => getRus(cityRussia, setRussia, setRuList)}
                value={cityRussia}
                list={russiaList}
                className='russiaList'
                variant='header'
            />
            <VertLine/>
            <MainSelect
                onClick={() => getCurrensies(currency, setCurrency, setCurList)}
                value={currency}
                list={currencyList}
                className='currencyList'
                variant='header'
            />
            <VertLine/>
            {hint === 'go' ?
                <button
                    css={button}
                    onClick={() => saveRoad(dispatch, cityRussia, currency, () => setEdit('string'))}
                >
                    <img src={okImg} alt="OK"/>
                </button>
                :
                <button
                    css={button}
                    onClick={() => alert('Введите корректные значения')}
                >
                    <img src={okImg} alt="OK"/>
                </button>
            }
        </div>
    }

    return (
        <div css={css(`position: relative; margin-left: 60px;`)}>
            {road}
            {hints[0] && roadMap.from &&
            <GlobalHint
                body='Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения'
                num={0}
                arrow='up'
                style={{
                    flexDirection: 'row-reverse',
                    top: 55,
                    left: 50,
                    width: 790,
                    height: 55,
                }}
            />
            }
        </div>


    );
};

export default HeaderRoad;