"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
require("reflect-metadata");
var caller_1 = require("./caller");
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var port = 8080;
/* GET home page. */
app.get('/', function (req, res, next) {
    var service = inversify_config_1.myContainer.get(types_1.TYPES.iName);
    var caller = new caller_1.Caller(service);
    res.send("Company name is " + caller.getName());
});
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
module.exports = app;
