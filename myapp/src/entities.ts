import {injectable} from "inversify";
import "reflect-metadata";
import {iName} from "./interfaces"

@injectable()
export class CompanyName implements iName {
    public getName() {
        return "Sensibill";
    }
}

