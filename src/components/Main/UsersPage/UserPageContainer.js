import { connect } from 'react-redux';
import Users from "./Users";
import {follow_user_ac, unfollow_user_ac, set_users_ac} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {

    return {
        users: state.user_page.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow_user: (user_id) => {

            dispatch(follow_user_ac(user_id))
        },
        unfollow_user: (user_id) => {
            dispatch(unfollow_user_ac(user_id))
        },
        set_users: (users) => {
            dispatch(set_users_ac(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Users);