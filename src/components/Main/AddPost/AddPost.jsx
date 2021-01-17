import React from "react";

const AddPost = (props) => {


    let new_post_textarea = React.createRef();

    let add_post = () => {
        props.add_post();

    };


    let on_textarea_change = () => {
        let text = new_post_textarea.current.value;

        props.update_textarea(text);
    };

    return (
        <div>
            <div>
                <textarea onChange={on_textarea_change} name="" id="" cols="10" rows="2" ref={new_post_textarea} value={props.new_post_text.text}/>
            </div>
            <div>
                <button onClick={add_post}>Click</button>
            </div>

        </div>
    )

};

export default AddPost;