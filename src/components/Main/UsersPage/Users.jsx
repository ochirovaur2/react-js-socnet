import React from "react";
import * as axios from 'axios';


class  Users extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => (this.props.set_users(response.data.items) ) )
        // this.props.set_users([{id: 1, followed: true,  name: 'aaa'},{id: 2,  followed: false, name: 'Vanya'}, {id: 3, followed: true, name: 'Andrey'}])

    }

    render() {
        return <div  >
            {this.props.users.map( (user) => {
                return (
                    <div  >

                        <span>{user.id}</span>
                        <span>{user.name}</span>
                        <div>
                            {
                                user.followed ? <button onClick={() => {  this.props.unfollow_user(user.id)} }>Unfollow</button>
                                    : <button onClick={() => {  this.props.follow_user(user.id)} }>Follow</button>
                            }
                        </div>
                    </div>

                )
            })}


        </div>
    }
}
// const Users = (props) => {
//
//
//     return (
//         <div  >
//             {props.users.map( (user) => {
//                 return (
//                     <div  >
//
//                         <span>{user.id}</span>
//                         <span>{user.name}</span>
//                         <div>
//                             {
//                                 user.followed ? <button onClick={() => {  props.unfollow_user(user.id)} }>Unfollow</button>
//                                     : <button onClick={() => {  props.follow_user(user.id)} }>Follow</button>
//                             }
//                         </div>
//                     </div>
//
//                 )
//             })}
//
//
//         </div>
//     )
// }

export default Users;