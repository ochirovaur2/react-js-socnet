import React from 'react';
import s from './nav.module.scss';
import {NavLink} from "react-router-dom";



const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__ul}>
                <NavLink exact to='/profile'>
                    <li className={s.nav__li}>Profile</li>
                </NavLink>
                <NavLink to='/dialogs'>
                    <li className={s.nav__li}>Dialogs</li>
                </NavLink>
                <NavLink to='/users'>
                    <li className={s.nav__li}>Users</li>
                </NavLink>
            </ul>
        </nav>
    )
};

export default Nav;