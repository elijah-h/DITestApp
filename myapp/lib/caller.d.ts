import { iName } from "./interfaces";
export declare class Caller implements iName {
    private _companyName;
    constructor(companyName: iName);
    getName(): string;
}
