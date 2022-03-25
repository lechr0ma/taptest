import React from 'react';
import classes from './ContactsPage.module.css'
import ig from '../../../img/ig.svg'
import facebook from '../../../img/facebook.svg'
import wechat from '../../../img/wechat.svg'
import whatsapp from '../../../img/whatsapp.svg'
import Contacts from "./Contacts";
import P36 from "../UI/P/P36";
import D23Roboto from "../UI/D23Roboto";

const ContactData = () => {
    return (
        <div className={classes.contactData}>
            <Contacts/>
            <div className={classes.social}>
                <P36>Наши соцсети:</P36>
                <div className={classes.social__container}>
                    <D23Roboto>
                        <a href=""><img src={ig} alt='IG'/></a>
                        Instagram
                    </D23Roboto>
                    <D23Roboto>
                        <a href=""><img src={whatsapp} alt='WA'/></a>
                        WhatsApp
                    </D23Roboto>
                    <D23Roboto>
                        <a href=""><img src={facebook} alt='FB'/></a>
                        Facebook
                    </D23Roboto>
                    <D23Roboto>
                        <a href=""><img src={wechat} alt='WC'/></a>
                        WeChat
                    </D23Roboto>
                </div>
            </div>
        </div>
    );
};

export default ContactData;