import {createStore, combineReducers} from "redux";
import profile_reducer from "./profile-reducer";
import dialogs_reducer from "./dialogs-reducer";


let reducers = combineReducers(
    {
        profile_reducer: profile_reducer,
        dialogs_reducer: dialogs_reducer
    }
)

let store = createStore(reducers);

export default store;