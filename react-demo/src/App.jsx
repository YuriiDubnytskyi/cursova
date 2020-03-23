"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.css");
var Main_1 = require("./component/Main/Main");
var Login_1 = require("./component/Login/Login");
var react_router_dom_1 = require("react-router-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<react_router_dom_1.BrowserRouter>
                <react_router_dom_1.Switch>

                        <react_router_dom_1.Route path="/" exact component={Login_1.default}/>
                        <react_router_dom_1.Route path="/main/" exact component={Main_1.default}/>

                </react_router_dom_1.Switch>
            </react_router_dom_1.BrowserRouter>);
    };
    return App;
}(react_1.Component));
exports.default = App;
