import {Request, Response} from 'express';
import {VitalsController} from "./VitalsController";
import {VitalsService} from "../services/VitalsService";
import {NotFoundError} from "../errors/NotFoundError";


export class VitalsControllerImpl implements VitalsController {

    private readonly service: VitalsService;


    constructor(service: VitalsService) {
        this.service = service;
    }

    // ---------------------------------------------------------------------------------------------------------------

    getVitals(req: Request, res: Response): void {
        this.service.getAll().then((vitals) => {
            res.end(JSON.stringify(vitals))
        }).catch((err) => {
            res.status(500).end(JSON.stringify(err));
        });
    }

    getVitalsById(req: Request, res: Response): void {
        const id = req.params.id as string;
        this.service.get(parseInt(id)).then((vital) => {
            res.end(JSON.stringify(vital));
        }).catch((err) => {
            if (err instanceof NotFoundError)
                res.status(404).end(`Vitals with id ${id} not found.`);
            else {
                console.error(`Unable to get vitals ${id}.`,err);
                res.status(500).end(JSON.stringify(err));
            }
        });
    }


}