import express from "express";
const app = express();
import "reflect-metadata";
import {Caller} from './caller';
import {iName} from "./interfaces";
import {myContainer} from "./inversify.config";
import {TYPES} from "./types";
const port = 8080;

/* GET home page. */
app.get('/', function (req, res, next) {
    const service = myContainer.get<iName>(TYPES.iName);
    const caller = new Caller(service);

    res.send( `Company name is ${caller.getName()}` );
});

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

module.exports = app;