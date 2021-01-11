import React from 'react';
import { update_msg_text, send_msg_creator } from "../../../redux/dialogs-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    console.log(props)
    let update_textarea = (text) => {

        props.dispatch(update_msg_text(text))

    };

    let send_msg = () => {
        props.dispatch(send_msg_creator())
    };

    return (

        <Messages send_msg={send_msg} update_textarea={update_textarea} messages={props.messages} textarea_val={props.textarea_val}/>

    )
};

export default MessagesContainer;