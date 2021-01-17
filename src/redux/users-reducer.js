const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';


let initial_state = {
    users: [   ],
}

const user_reducer = (state=initial_state, action) => {
    let state_copy = {...state};
    switch (action.type){


        case FOLLOW_USER:
            state_copy.users = state_copy.users.map(( user) => {
                if (user.id === action.user_id) {

                    return {...user, followed: true}

                } else {
                    return user
                }


            })

            return state_copy;

            break;
        case UNFOLLOW_USER:

            state_copy.users = state_copy.users.map(( user) => {
                if (user.id === action.user_id) {

                    return {...user, followed: false}

                } else {
                    return user
                }


            })
            return state_copy;
            break;
        case SET_USERS:
            return {state_copy, users: [...state_copy.users, ...action.users] }
            return state_copy;
            break

        default:
            return state;
    }

    return state_copy;
};

export default user_reducer;

export const set_users_ac = (users) =>  ({type: SET_USERS, users: users});
export const follow_user_ac = (user_id) => ({type: FOLLOW_USER, user_id: user_id});
export const unfollow_user_ac = (user_id) => ({type: UNFOLLOW_USER, user_id: user_id});