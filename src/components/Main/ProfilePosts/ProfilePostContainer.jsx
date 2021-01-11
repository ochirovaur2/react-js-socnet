import { connect } from 'react-redux';
import ProfilePosts from "./ProfilePosts";
const mapStateToProps = (state) => {
    return {
        posts: state.profile_reducer.posts
    }
};

export default connect(mapStateToProps, null) (ProfilePosts);