import React from 'react';
import s from './profile.module.scss';
import AddPost from "../AddPost/AddPost";



const Profile = (props) => {
    return (
        <div className={s.profile}>
            <AddPost/>

            <div className={s.profile__posts}>
                {props.posts.map( (post) => {
                    return (
                        <div className={s.profile__post}>
                            {post.text}
                        </div>
                    )
                })}


            </div>
        </div>
    )
};

export default Profile;