import React from 'react';
import s from './profile.module.scss';



const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile__posts}>
                <div className={s.profile__post}>
                    some post
                </div>
                <div className={s.profile__post}>
                    some post
                </div>
                <div className={s.profile__post}>
                    some post
                </div>
            </div>
        </div>
    )
};

export default Profile;