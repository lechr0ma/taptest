import React from 'react';
import Header from "../Components/desktop/header/Header";
import FeedbackSended from "../Components/desktop/contacts/FeedbackSended";
import SendedMobile from "../Components/mobile/pages/feedback/SendedMobile";

const SendPage = () => {
    return (
        <div>
            <Header/>
            <FeedbackSended/>
            <SendedMobile/>
        </div>
    );
};

export default SendPage;