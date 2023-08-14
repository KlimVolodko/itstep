import { FC } from "react";
import styles from "./Footer.module.scss";
import "./Footer.module.scss";





const Footer: FC = () => {
    return <footer className="foot">
    <div className="container">
        <div className="footer">
            <div className="footer__summary">
                <div className="footer__summary__logo">
                    <div className="footer__summary__logo_img">
                        <a href="/" className={styles.title}>ART<span>PLUS</span></a>
                    </div>
                </div>
                <div className="footer__summary__product">
                    <div className="footer__summary__product__company">
                        <div className="footer__summary__product__company_header">
                            <h3>О компании</h3>
                        </div>
                        <div className="footer__summary__product__company_list">
                            <ul>
                                <li><a href="portfolio">Портфолио</a></li>
                                <li><a href="/">Услуги</a></li>
                                <li><a href="price">Цены</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__summary__product__services">
                        <div className="footer__summary__product__services_header">
                            <h3>Услуги</h3>
                        </div>
                        <div className="footer__summary__product__services_list">
                            <ul>
                                <li><a href="#">Составление технического задания</a></li>
                                <li><a href="#">2D / 3D dизуализация</a></li>
                                <li><a href="#">Подбор мебели и чистовых материалов</a></li>
                                <li><a href="#">Технический надзор</a></li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="footer__connection">
                <div className="footer__connection__contacts">
                    <div className="footer__connection__contacts_header">
                        <h3>Связаться с нами</h3>
                    </div>
                    <div className="footer__connection__contacts__phone">
                        <div className="foote__connectionr__contacts__phone_picture">
                            <img src="./img/bi_phoneW.png" alt="телефон"/>
                        </div>
                        <div className="footer__connection__contacts__phone_number">
                            <a href="tel:+33775558724">(+33)5 55 55 55 55</a>
                        </div>
                    </div>
                    <div className="footer__connection__contacts__address">
                        <div className="footer__connection__contacts__address_picture">
                            <img src="./img/bi_pin-mapW.png" alt="карта"/>
                        </div>
                        <address>2118 Thornridge Cir. Syracuse, <br/>Connecticut 35624</address>
                    </div>
                    <div className="footer__connection__contacts__email">
                        <div className="footer__connection__contacts__email_picture">
                            <img src="./img/eva_email-outlineW.png" alt="конверт"/>
                        </div>
                        <div className="footer__connection__contacts__email_content">
                            <a href="mailto:SpakIT@gmail.com">ARTPLUS@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer__connection__contacts_networks">
                        <ul>
                            <li><a href="#" className="telegram"><img src="./img/icon_telegram.png" alt="телеграм"/></a></li>
                            <li><a href="#" className="dribbble"><img src="./img/icon_dribbble.png" alt="дрибл"/></a></li>
                            <li><a href="#" className="behance"><img src="./img/icon_behance.png" alt="беханс"/></a></li>
                            <li><a href="#" className="linkedin"><img src="./img/icon_linkedin.png" alt="линкедин"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>   
    </div>
    <div className="copyright">
        <div className="copyright_text">
            © 2007-2022 sparkit. All Rights Reserved. Privacy Policy.
        </div>
    </div>
</footer>
}

export default Footer