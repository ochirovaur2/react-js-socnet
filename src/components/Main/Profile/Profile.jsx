import React from 'react';
import s from './profile.module.scss';
import AddPostContainer from "../AddPost/AddPostContainer";


const Profile = (props) => {
    console.log(3, props)
    return (
        <div className={s.profile}>
            <AddPostContainer dispatch={props.dispatch} new_post_text={props.new_post_text}   />

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