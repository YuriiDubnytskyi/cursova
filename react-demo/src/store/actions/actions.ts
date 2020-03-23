import * as actionTypes from './actionTypes';

export const startGameForX = () => {
    return {
        type: actionTypes.START_GAME_FOR_X
    };
};

export const startGameForO = () => {
    return {
        type: actionTypes.START_GAME_FOR_O
    };
};

export const restart = () => {
    return {
        type: actionTypes.RESTART
    };
};

export const winGame = ( result:any, name:any ) => {
    return {
        type: actionTypes.WIN_GAME,
        result: result,
        name: name
    };
};

export const setPoint = ( xPoint:any, oPoint:any, opponent:any, variant :any) => {
    return {
        type: actionTypes.SET_POINT,
        xPoint: xPoint,
        oPoint: oPoint,
        opponent: opponent,
        variant: variant
    };
};

export const addUser = (  name:any, surname:any, score:any ) => {
    return {
        type: actionTypes.ADD_USER,
        name: name,
        surname:surname,
        score:score
    };
};

export const addScore = ( win:any,lose:any,draw:any ) => {
    return {
        type: actionTypes.ADD_SCORE,
        win:win,
        lose:lose,
        draw:draw
    };
};

export const exit = () => {
    return {
        type: actionTypes.EXIT,
    };
};