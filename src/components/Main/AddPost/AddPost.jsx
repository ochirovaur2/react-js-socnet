import React from "react";

const AddPost = (props) => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="10" rows="2"></textarea>
            </div>
            <div>
                <button onClick={ props.add_post}>Click</button>
            </div>

        </div>
    )

};

export default AddPost;