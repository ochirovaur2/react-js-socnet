import React from 'react';
import s from './main.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {
    Route
} from "react-router-dom"




const Main = (props) => {
    console.log(1, props.state.profile_reducer.new_post_text)
    return (
        <section className={s.main}>
            <Route path='/profile'  render = { () => <Profile posts={props.state.profile_reducer.posts} dispatch={props.dispatch} new_post_text={ props.state.profile_reducer.new_post_text}/>  }/>
            <Route path='/dialogs'    render = { () => <Dialogs dialogs_arr={props.state.dialogs_reducer.dialogs_arr}  dispatch={props.dispatch} messages={props.state.dialogs_reducer.messages} textarea_val={props.state.dialogs_reducer.new_message_text}/> } />
        </section>
    )
};

export default Main;

