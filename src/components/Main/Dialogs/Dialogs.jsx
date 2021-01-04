import React from 'react';
import s from './dialogs.module.scss';
import Messages from '../Messages/Messages';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/1'>Dima</NavLink>
                </div>
                <div className={`${s.dialogs__item} ${s.dialogs__active}`}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialogs__item}>
                    <NavLink to='/dialogs/3'>Valera</NavLink>

                </div>
            </div>
            <Messages/>
        </div>
    )
};

export default Dialogs;