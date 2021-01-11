
const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';


let initial_state = {
    posts: [ {text: 'Some post'}, {text: 'Some post'},{text: '1 post'} ],
    new_post_text: {text: ''}
}

const profile_reducer = (state=initial_state, action) => {

    switch (action.type) {
        case ADD_POST:

            state.posts = [...state.posts, {text: state.new_post_text.text}];
            state.new_post_text.text = '';
            break;
        case UPDATE_TEXTAREA:
            state.new_post_text.text = action.text;
            break;
        default:
            return state;
    }
    return state;

};

export const add_post_action_creator = () => ({ type: ADD_POST  });
export const update_textarea_action_creator = (text) => ({type: UPDATE_TEXTAREA, text: text})

export default profile_reducer;