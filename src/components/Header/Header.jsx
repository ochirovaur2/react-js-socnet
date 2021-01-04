import React from 'react';
import s from './header.module.scss';



const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt=""/>
        </header>
    )
};

export default Header;