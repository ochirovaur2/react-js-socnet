import React from 'react';
import s from './messages.module.scss';

const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.messages__item}>
                Hi
            </div>
            <div className={s.messages__item}>
                Hi
            </div>
            <div className={s.messages__item}>
                Hi
            </div>
        </div>
    )
};

export default Messages;