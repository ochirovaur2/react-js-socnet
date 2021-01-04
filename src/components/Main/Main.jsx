import React from 'react';
import s from './main.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {
    Route
} from "react-router-dom"


const Main = () => {
    return (
        <section className={s.main}>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
        </section>
    )
};

export default Main;

