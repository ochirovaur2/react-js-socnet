import React from 'react';
import { update_msg_text, send_msg_creator } from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import { connect } from 'react-redux';

const MessagesContainer = (props) => {

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


const mapStateToProps = (state) => {
    console.log(state.dialogs_reducer)
    return {
        messages: state.dialogs_reducer.messages,
        textarea_val: state.dialogs_reducer.new_message_text
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        send_msg: () => {
            dispatch(send_msg_creator())
        },
        update_textarea: (text) => {
            dispatch(update_msg_text(text))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Messages);