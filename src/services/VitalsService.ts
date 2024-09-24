import {VitalsModel} from "../models/VitalsModel";


export interface VitalsService {

    getAll() : Promise<VitalsModel[]>;
    get(id : number) : Promise<VitalsModel>;

}