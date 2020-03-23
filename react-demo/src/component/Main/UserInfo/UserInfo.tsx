import React from 'react';
import {connect} from "react-redux";
import {IUserState} from "../../../interfaces/IUserState";

type UserProps = {
    state:IUserState
}

const UserInfo = (props:UserProps) => {
    return (
        <div>
            <p>{props.state.userName}</p>
            <p>{props.state.userSurname}</p>
            <p>Score = {props.state.score}+{props.state.addScore}</p>
        </div>
    )
};

const mapStateToProps = (state:{user:IUserState}) => {
    return {
        state: state.user
    }
};

export default connect(mapStateToProps)(UserInfo);
