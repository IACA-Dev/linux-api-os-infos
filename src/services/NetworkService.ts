import {InterfaceModel} from "../models/InterfaceModel";


export interface NetworkService {

    getInterfaceByName(name : string) : Promise<InterfaceModel>;

}