import {Request, Response} from 'express';

export interface VitalsController {
    getVitals(req: Request, res: Response) : void;
    getVitalsById(req: Request, res: Response) : void;
}