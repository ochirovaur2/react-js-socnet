import {Dialog} from "./Dialog";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogs_arr: state.dialogs_reducer.dialogs_arr
    }
}

export default connect(mapStateToProps, null) (Dialog);