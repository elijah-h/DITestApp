"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var dummyCompany_1 = require("./dummyCompany");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.TYPES.iName).to(dummyCompany_1.DummyCompany);
