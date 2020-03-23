"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./Boxes.css");
var prop_types_1 = require("prop-types");
var Box = function (props) {
    return (<div className='boxes-block__box' onClick={function () { return props.clickBox(props.xPoint, props.yPoint); }}>
            <div className={props.element ? "animation" : "none"}>{props.element}</div>
        </div>);
};
Box.propTypes = {
    xPoint: prop_types_1.default.number.isRequired,
    yPoint: prop_types_1.default.number.isRequired,
    clickBox: prop_types_1.default.func.isRequired
};
exports.default = Box;
