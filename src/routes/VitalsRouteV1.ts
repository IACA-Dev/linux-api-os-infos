import {Router, Request, Response} from "express";
import {VitalsController} from "../controllers/VitalsController";


export class VitalsRouteV1 {
    private readonly _path = '/vitals';
    private readonly _router = Router();

    private readonly controller : VitalsController;

    constructor(controller : VitalsController) {
        this.initializeRoutes();
        this.controller = controller;
    }

    private initializeRoutes() {
        this._router.get(`${this._path}`, (req: Request, res: Response) => {
            this.controller.getVitals(req, res);
        });
    }


    get router(): Router {
        return this._router;
    }

}