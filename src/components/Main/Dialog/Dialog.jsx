import s from "./dialog.module.scss";
import {NavLink} from "react-router-dom";





export const Dialog = (props) => {
    return (
        <div >
            {props.dialogs_arr.map( (dialog) => { return (<div className={s.dialog}><NavLink to={'/dialogs/' + dialog.id} key={dialog.id}>{dialog.name}</NavLink></div> )} ) }
        </div>

    )
};