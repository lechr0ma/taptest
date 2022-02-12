import React from 'react';
import classes from './ContactData.module.css'
import ig from '../../img/ig.svg'
import facebook from '../../img/facebook.svg'
import wechat from '../../img/wechat.svg'
import whatsapp from '../../img/whatsapp.svg'
const ContactData = () => {
    return (
        <div className={classes.contactData}>
            <div className={classes.contacts}>
                <p>Наши контакты:</p>
                <div className={classes.contacts__container}>
                    <p>Наша почта:</p>
                    <p>asia@baikalvl.ru</p>
                    <p>Телефон:</p>
                    <p>8 800 201-87-77</p>
                </div>
            </div>
            <div className={classes.social}>
                <p>Наши соцсети:</p>
                <div className={classes.social__container}>
                    <div><img src={ig}/>
                        <span>Instagram</span>
                    </div>
                    <div><img src={whatsapp}/>WhatsApp</div>
                    <div><img src={facebook}/>Facebook</div>
                    <div><img src={wechat}/>WeChat</div>
                </div>
            </div>
        </div>
    );
};

export default ContactData;