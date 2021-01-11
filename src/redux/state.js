import profile_reducer from "./profile-reducer";
import dialogs_reducer from "./dialogs-reducer";




let store = {
    _state:{
        profile_page: {
            posts: [ {text: 'Some post'}, {text: 'Some post'},{text: '1 post'} ],
            new_post_text: {text: ''}

        },
        dialogs_page: {
            dialogs_arr: [ {id: 1, name: 'Dima'},{id: 2, name: 'Vanya'}, {id: 3, name: 'Andrey'}  ],
            messages: [ {id: 1, message: '2'}, {id: 2, message: 'Hi'},{id: 3, message: 'Hi'} ],
            new_message_text: ''
        },
    },

    get_state( ) {
        return this._state
    },
    subscribe(observer){

        this.observer = observer
    },
    _call_subscriber(state){
        this.observer(state)
    },

    dispatch(action){
        profile_reducer(this.get_state(), action)
        dialogs_reducer(this.get_state(), action)
        this._call_subscriber(this)

    }

}


export default store;

