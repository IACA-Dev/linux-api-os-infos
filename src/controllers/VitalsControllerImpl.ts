import {Request, Response} from 'express';
import {VitalsController} from "./VitalsController";
import {VitalsService} from "../services/VitalsService";


export class VitalsControllerImpl implements VitalsController{

    private readonly service : VitalsService;


    constructor(service: VitalsService) {
        this.service = service;
    }

    // ---------------------------------------------------------------------------------------------------------------

    getVitals(req: Request, res: Response) : void{

        res.end(JSON.stringify(this.service.getAll()))

    }
}