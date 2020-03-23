"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./Boxes.css");
var prop_types_1 = require("prop-types");
var BoxRow_1 = require("./BoxRow");
var Boxes = function (props) {
    return (<div>
            <div className='boxes-block'>
                {props.game.map(function (element, index) { return <BoxRow_1.default array={element} rowIndex={index} key={index} clickBox={props.clickBox}/>; })}
            </div>
        </div>);
};
Boxes.propTypes = {
    game: prop_types_1.default.array.isRequired,
    clickBox: prop_types_1.default.func.isRequired
};
exports.default = Boxes;
