import React from 'react';
import s from './messages.module.scss';

const Messages = (props) => {
    return (
        <div className={s.messages}>

            {props.messages.map( (elem) => {
                return (
                    <div className={s.messages__item}>
                        {elem.message}
                    </div>
                )
            } )}


        </div>
    )
};

export default Messages;