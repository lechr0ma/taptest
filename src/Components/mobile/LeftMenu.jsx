import React from 'react';
import classes from "./pages/mainStyle.module.css";
import img from "../../img/logo.png";
import close from "../../img/close.svg";
import facebook from "../../img/FacebookMobile.svg";
import ig from "../../img/instagramMobile.svg";
import wa from "../../img/WhatsappMobile.svg";
import wc from "../../img/WechatMobile.svg";
import {Transition} from "react-transition-group";
import {useNavigate} from "react-router-dom";
import '../../styles/trans.css'
import WhiteButton from "./UI/button/WhiteButton";
import ImageButton from "./UI/button/ImageButton";

const LeftMenu = ({show, rem}) => {
    const hist = useNavigate();
    return (
        <Transition in={show} timeout={500}>
            {state =>
                <div className={[classes.feedback, state].join(' ')}>
                    <div className='menu__header'>
                        <img src={img} alt='logo'/>
                        <ImageButton
                            onClick={rem}
                            image={close}
                            alt='menu'
                        />
                    </div>
                    <div className={classes.contacts}>
                        <a className={classes.contacts__link} href="mailto:asia@baikalvl.ru">asia@baikalvl.ru</a>
                        <a className={classes.contacts__link} href="tel:+78002018777">8 800 201-87-77</a>
                        <WhiteButton
                            onClick={() => hist('/contacts')}
                        >
                            Связаться
                        </WhiteButton>
                    </div>
                    <div className={classes.media}>
                        <p className={classes.media__title}>Мы в соц. сетях:</p>
                        <div className={classes.media_icons}>
                            <a href=""><img src={facebook} alt="facebook"/></a>
                            <a href=""><img src={ig} alt="instagram"/></a>
                            <a href=""><img src={wa} alt="whatsapp"/></a>
                            <a href=""><img src={wc} alt="wechat"/></a>
                        </div>
                    </div>
                </div>}
        </Transition>
    );
};

export default LeftMenu;