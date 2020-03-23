"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = require("./actionTypes");
exports.startGameForX = function () {
    return {
        type: actionTypes.START_GAME_FOR_X
    };
};
exports.startGameForO = function () {
    return {
        type: actionTypes.START_GAME_FOR_O
    };
};
exports.restart = function () {
    return {
        type: actionTypes.RESTART
    };
};
exports.winGame = function (result, name) {
    return {
        type: actionTypes.WIN_GAME,
        result: result,
        name: name
    };
};
exports.setPoint = function (xPoint, oPoint, opponent, variant) {
    return {
        type: actionTypes.SET_POINT,
        xPoint: xPoint,
        oPoint: oPoint,
        opponent: opponent,
        variant: variant
    };
};
exports.addUser = function (name, surname, score) {
    return {
        type: actionTypes.ADD_USER,
        name: name,
        surname: surname,
        score: score
    };
};
exports.addScore = function (win, lose, draw) {
    return {
        type: actionTypes.ADD_SCORE,
        win: win,
        lose: lose,
        draw: draw
    };
};
exports.exit = function () {
    return {
        type: actionTypes.EXIT,
    };
};
