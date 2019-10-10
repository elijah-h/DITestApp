import {iName} from "./interfaces";
import {injectable} from "inversify";

@injectable()
export class DummyCompany implements iName {
    getName(): string {
        return "DummyName";
    }
}