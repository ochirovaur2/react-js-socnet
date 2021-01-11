import React from 'react';
import s from './dialogs.module.scss';
import {Dialog} from '../Dialog/Dialog';
import MessagesContainer from "../Messages/MessagesContainer";








const Dialogs = (props) => {
    console.log(2, props.textarea_val)
    return (
        <div className={s.dialogs}>
            <Dialog dialogs_arr = {props.dialogs_arr}/>

            <MessagesContainer messages={props.messages} dispatch={props.dispatch} textarea_val={props.textarea_val}/>
        </div>
    )
};

export default Dialogs;