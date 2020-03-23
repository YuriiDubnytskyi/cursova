"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./Boxes.css");
var prop_types_1 = require("prop-types");
var Box_1 = require("./Box");
var BoxRow = function (props) {
    return (<div>
            <div className='boxes-block__row'>
                {props.array.map(function (element, index) { return <Box_1.default element={element} xPoint={props.rowIndex} yPoint={index} key={index} clickBox={props.clickBox}/>; })}
            </div>
        </div>);
};
BoxRow.propTypes = {
    array: prop_types_1.default.array.isRequired,
    clickBox: prop_types_1.default.func.isRequired
};
exports.default = BoxRow;
