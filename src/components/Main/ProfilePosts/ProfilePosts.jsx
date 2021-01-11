import React from "react";

const ProfilePosts = (props) => {
    return (
        <div  >
            {props.posts.map( (post) => {
                return (
                    <div  >
                        {post.text}
                    </div>
                )
            })}


        </div>
    )
}

export default ProfilePosts;