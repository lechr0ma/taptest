import React, {useState} from 'react';
import classes from './feedbackForm.module.css'
import close from '../../img/close.svg'
import {useNavigate} from "react-router-dom";

const FeedbackFormMobile = () => {
    const hist = useNavigate();
    const [hint, setHint] = useState('');
    let [inputs, setInputs] = useState({
        name: '',
        tel:'',
        email:''
    }) ;
    function getHint() {
        inputs.name.trim() && !/[0-9]/.test(inputs.name)  ? inputs.tel.trim().length > 7 ? inputs.email.trim().includes('@') ? hist('/sended') : setHint('email')
            : setHint('Телефон')
            : setHint('Имя')
    }
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <button onClick={()=>hist(-1)}><img src={close} alt="close"/></button>
            </div>
            <div className={classes.title}>
                Связаться по доставке.
            </div>
            <div className={classes.contacts}>
                <p>Данные для связи</p>
                <input onChange={(e)=>setInputs({...inputs, name: e.target.value })} type="text" placeholder='Имя'/>
                <input onChange={(e)=>setInputs({...inputs, tel: e.target.value })} type="number" placeholder='Телефон'/>
                <input onChange={(e)=>setInputs({...inputs, email: e.target.value })} type="email" placeholder='E-mail'/>
                {hint && <p style={{color: "red"}}>*Заполните поле {hint} !</p>}
            </div>
            <div className={classes.answer}>
                <p>Опишите ваш вопрос</p>
                <textarea name="answer" id="answer" rows="10"></textarea>
            </div>
            <div className={classes.submit}>
                <button className={classes.blue} onClick={getHint}>Связаться по доставке</button>
                <p>Нажимая на кнопку, вы даете <a href='#'>согласие на обработку</a> своих персональных данных</p>
            </div>
            
        </div>
    );
};

export default FeedbackFormMobile;