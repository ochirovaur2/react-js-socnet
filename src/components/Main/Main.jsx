import React from 'react';
import s from './main.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {
    Route
} from "react-router-dom"




const Main = (props) => {

    return (
        <section className={s.main}>
            <Route path='/profile'  render = { () => <Profile posts={props.state.profile_page.posts}/> }/>
            <Route path='/dialogs'    render = { () => <Dialogs dialogs_arr={props.state.dialogs_page.dialogs_arr} messages={props.state.dialogs_page.messages}/> } />
        </section>
    )
};

export default Main;

