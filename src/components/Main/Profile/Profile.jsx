import React from 'react';
import s from './profile.module.scss';
import AddPostContainer from "../AddPost/AddPostContainer";
import ProfilePostContainer from "../ProfilePosts/ProfilePostContainer";

const Profile = () => {

    return (
        <div className={s.profile}>
            <AddPostContainer  />
            <ProfilePostContainer />

        </div>
    )
};




export default Profile;