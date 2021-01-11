import React from 'react';
import s from './messages.module.scss';


const Messages = (props) => {

    let new_msg_text = React.createRef();

    let update_textarea = () => {
        let text = new_msg_text.current.value;
        props.update_textarea(text)

    };

    let send_msg = () => {
        props.send_msg()
    };

    return (
        <div className={s.messages}>

            {props.messages.map( (elem) => {
                return (
                    <div className={s.messages__item} id={elem.id}>
                        {elem.message}
                    </div>
                )
            } )}

            <div>
                <textarea value={props.textarea_val} onChange={update_textarea} ref={new_msg_text}/>
            </div>
            <div>
                <button onClick={send_msg}>Click</button>
            </div>
        </div>


    )
};

export default Messages;