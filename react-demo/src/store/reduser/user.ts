import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IUserState} from "../../interfaces/IUserState";

const initialState:IUserState = {
    userName:"",
    userSurname:"",
    score:0,
    addScore:0
};


const user = ( state:IUserState = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.ADD_USER:
            return updateObject(state, {
                userName:action.name,
                userSurname:action.surname,
                score:action.score
            });
        case actionTypes.ADD_SCORE:
            return updateObject(state, {
                addScore: action.win- action.lose+ action.draw/2
            });
        case actionTypes.EXIT:
            return updateObject(state, {
                userName:"",
                userSurname:"",
                score:0,
                addScore:0
            });
    }
    return state;
};

export default user;