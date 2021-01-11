const UPDATE_MSG_TEXT = 'UPDATE_MSG_TEXT';
const SEND_MSG = 'SEND_MSG';

let initial_state = {
    dialogs_arr: [ {id: 1, name: 'Dima'},{id: 2, name: 'Vanya'}, {id: 3, name: 'Andrey'}  ],
    messages: [ {id: 1, message: '2'}, {id: 2, message: 'Hi'},{id: 3, message: 'Hi'} ],
    new_message_text: ''
}

const dialogs_reducer = (state=initial_state, action) => {
    switch (action.type){
        case SEND_MSG:
            state.messages = [...state.messages, {id: 4, message: state.new_message_text}];
            state.new_message_text = '';

            break;
        case UPDATE_MSG_TEXT:
            state.new_message_text = action.text;
            break;
        default:
            return state;
    }
    return state;
};

export default dialogs_reducer;

export const send_msg_creator = () =>  ({type: SEND_MSG});
export const update_msg_text = (text) => ({type: UPDATE_MSG_TEXT, text: text});