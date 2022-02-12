import React from 'react';
import classes from "./ContactsPage.module.css";
import {Link} from "react-router-dom";


const FeedbackSended = () => {
    return (
        <div>
            <div className={classes.feedbackSended}>
                <h1>Спасибо за заявку!</h1>
                <p>Мы свяжемся с вами в ближайшее время.</p>
                <div className={classes.btns}>
                    <Link to='/contacts'><button>К контактам &rarr;</button></Link>
                    <Link to='/'><button>На главную &rarr;</button></Link>
                </div>
                </div>

        </div>
    );
};

export default FeedbackSended;