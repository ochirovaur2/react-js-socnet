import React from "react";
import {update_textarea_action_creator, add_post_action_creator} from "../../../redux/profile-reducer";
import AddPost from "./AddPost";
import { connect } from 'react-redux';

const AddPostContainer = (props) => {
    console.log(3.5, props)

    let add_post_on_click = () => {
        props.dispatch(add_post_action_creator());

    };


    let update_textarea_on_change = (text) => {
        props.dispatch(update_textarea_action_creator(text));
    };

    return (
        <AddPost update_textarea={update_textarea_on_change} add_post={add_post_on_click} new_post_text={props.new_post_text}/>
    )

};


const mapStateToProps = (state) => {
    return {
        new_post_text: state.profile_reducer.new_post_text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        update_textarea: (text) => {
            dispatch(update_textarea_action_creator(text));
        },
        add_post: () =>{
            dispatch(add_post_action_creator());
        }
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (AddPost) ;