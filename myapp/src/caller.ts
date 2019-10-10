import {inject, injectable} from "inversify";
import {iName} from "./interfaces";
import {TYPES} from "./types";

@injectable()
export class Caller implements iName {
    private _companyName: iName;

    public constructor(@inject(TYPES.iName) companyName: iName) {
        this._companyName = companyName;
    }

    public getName() : string {
        return this._companyName.getName();
    }
}