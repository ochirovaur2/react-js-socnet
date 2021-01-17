import React from 'react';
import s from './main.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {
    Route
} from "react-router-dom";
import UserPageContainer from "./UsersPage/UserPageContainer";


const Main = (props) => {
    return (
        <section className={s.main}>
            <Route path='/profile'  render = { () => <Profile  />  }/>
            <Route path='/dialogs'    render = { () => <Dialogs  /> } />
            <Route path='/users'    render = { () => <UserPageContainer />   } />
        </section>
    )
};

export default Main;

