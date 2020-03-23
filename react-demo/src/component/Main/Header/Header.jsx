"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./Header.css");
var prop_types_1 = require("prop-types");
var Header = function (props) {
    return (<div className="header">
            <header className="header-title">Tic - Tac - Toe</header>
                <button className="choice" onClick={props.gameX} disabled={props.disable}>X</button>
                <button className="choice" onClick={props.gameO} disabled={props.disable}>O</button>
                <br />
                <button className="start" onClick={props.startRetryGame}>{props.retry ? "Retry" : "Start"}</button>
                <section className="box-info">
                    <div className="user">
                        <p>User</p>
                        <div>
                            <p>Win - {props.win}</p>
                            <p>Lose - {props.lose}</p>
                            <p>Draw - {props.draw}</p>
                        </div>
                    </div>
                    <div className="comp">
                        <p>Comp</p>
                        <div>
                            <p>Win - {props.lose}</p>
                            <p>Lose - {props.win}</p>
                            <p>Draw - {props.draw}</p>
                        </div>
                    </div>
                </section>
                <section className="text-finish" id="finish">
                    <div>{props.winName}</div>
                </section>
                <button className="choice" onClick={props.exit}>Exit & Save</button>
        </div>);
};
Header.propTypes = {
    gameX: prop_types_1.default.func,
    gameO: prop_types_1.default.func,
    disable: prop_types_1.default.bool,
    startRetryGame: prop_types_1.default.func,
    win: prop_types_1.default.number,
    lose: prop_types_1.default.number,
    draw: prop_types_1.default.number,
    winName: prop_types_1.default.string
};
exports.default = Header;
