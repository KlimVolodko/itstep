import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Icon from '@mui/material/Icon';


const Header: FC = () => {
    const [viewMenu, setViewMenu] = useState(false)
   

    return <><div className={styles.hed}></div>
    <header className={styles.header}>
        <a href="/" className={styles.title}>ART<span>PLUS</span></a>
        <ul className={styles.menu}>
            <li><a href="/">Главная</a></li>
            <li><a href="portfolio">Портфолио</a></li>
            <li><a href="price">Стоимость</a></li>
            <li><a className={styles.tel} href="tel:+375334444444">
                <span className={'material-icons ' + styles.tel_icon}>call</span>
                +375 (33) 444-44-44
            </a></li>
        </ul>
        <Icon className={styles.icon_menu} onClick={() => setViewMenu(!viewMenu)}>menu</Icon>
        <ul className={viewMenu ? styles.menu_mobile : styles.menu_mobile_close} > 
            <li><a href="/">Главная</a></li>
            <li><a href="portfolio">Портфолио</a></li>
            <li><a href="price">Стоимость</a></li>
        </ul>  
    </header>
    </>
}

export default Header