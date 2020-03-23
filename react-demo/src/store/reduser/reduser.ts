import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState:any = {
    game: [
        [false,false,false],
        [false,false,false],
        [false,false,false]
    ],
    userPoint: [[]],
    compPoint: [[]],
    win: 0,
    lose: 0,
    draw: 0,
    user: null,
    comp: null,
    retry: false,
    disable: true,
    winName: null
};

const setPoint = ( state:any, action:any ) => {
  let updateArrayGame = state.game;
  let updateUserPoint = state.userPoint;
  let updateCompPoint = state.compPoint;
  updateArrayGame[action.xPoint][action.oPoint] = action.opponent;
  if(action.variant === 'first'){
      updateUserPoint.push([action.xPoint,action.oPoint])
  }else{
      updateCompPoint.push([action.xPoint,action.oPoint])
  }
  return updateObject( state, { game: updateArrayGame, compPoint:updateCompPoint, userPoint:updateUserPoint})
};

const reducer = ( state = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.START_GAME_FOR_X:
            return updateObject(state, {
                user: "x",
                comp: "o",
                retry: true,
                disable: true
            });
        case actionTypes.START_GAME_FOR_O:
            return updateObject(state, {
                user: "o",
                comp: "x",
                retry: true,
                disable: true
            });
        case actionTypes.RESTART:
            return updateObject(state, {
                user: null,
                comp: null,
                retry: true,
                game: [
                    [false,false,false],
                    [false,false,false],
                    [false,false,false]
                ],
                userPoint: [],
                compPoint: [],
                disable: false,
                winName: null
            });
        case actionTypes.WIN_GAME:
            return updateObject(state, {
                [action.result]: state[action.result] + 1,
                user: null,
                winName: action.name
            });
        case actionTypes.SET_POINT:
            return setPoint(state, action)

    }
    return state;
};

export default reducer;