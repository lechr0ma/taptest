import React from 'react';
import Header from "../main/Header";
import classes from "../main/ContactsPage.module.css";
import ContactData from "../static/ContactData";
import FeedbackForm from "../forms/FeedbackForm";

const ContactsPage = () => {
    return (
        <div style={{backgroundColor: 'inherit'}}>
            <Header/>
            <div className={classes.feedbackPage}>
                <h1>Свяжитесь с нами</h1>
                <div className={classes.container}>
                    <ContactData/>
                    <FeedbackForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;