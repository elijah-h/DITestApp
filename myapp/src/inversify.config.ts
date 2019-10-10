import { Container } from "inversify";
import { TYPES } from "./types";
import { iName } from "./interfaces";
import {DummyCompany} from "./dummyCompany";

const myContainer = new Container();
myContainer.bind<iName>(TYPES.iName).to(DummyCompany);

export { myContainer };