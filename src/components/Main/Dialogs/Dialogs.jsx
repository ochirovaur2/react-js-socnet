import React from 'react';
import s from './dialogs.module.scss';
import Messages from '../Messages/Messages';
import {Dialog} from '../Dialog/Dialog';








const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialog dialogs_arr = {props.dialogs_arr}/>
            <Messages messages={props.messages}/>
        </div>
    )
};

export default Dialogs;