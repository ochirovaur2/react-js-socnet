import React from 'react';
import s from './dialogs.module.scss';
import DialogContainer from '../Dialog/DialogContainer';
import MessagesContainer from "../Messages/MessagesContainer";


const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>

            <DialogContainer/>
            <MessagesContainer />
        </div>
    )
};

export default Dialogs;