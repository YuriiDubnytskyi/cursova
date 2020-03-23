"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.put = function (data) { return axios_1.default.put("/update", data); };
exports.getALL = function () { return axios_1.default.get("/users"); };
exports.post = function (data) { return axios_1.default.post('/add', data); };
exports.getOne = function (surname, name) { return axios_1.default.get("/find/" + surname + "/" + name); };
