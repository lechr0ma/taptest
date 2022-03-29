import React from 'react';
import Header from "../Components/desktop/header/Header";
import classes from "../Components/desktop/contacts/ContactsPage.module.css";
import ContactData from "../Components/desktop/contacts/ContactData";
import FeedbackForm from "../Components/desktop/contacts/FeedbackForm";
import FeedbackFormMobile from "../Components/mobile/pages/feedback/FeedbackFormMobile";
import P64 from "../Components/desktop/UI/P/P64";

const ContactsPage = () => {
    return (
        <div style={{backgroundColor: 'inherit'}}>
            <Header isRoad={true}/>
            <div className='feedback'>
                <P64>Свяжитесь с нами</P64>
                <div className={classes.container}>
                    <ContactData/>
                    <FeedbackForm/>
                </div>
            </div>
            <FeedbackFormMobile/>
        </div>
    );
};

export default ContactsPage;