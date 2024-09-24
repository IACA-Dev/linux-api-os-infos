import {Router, Request, Response} from "express";
import {NetworkController} from "../controllers/NetworkController";


export class NetworkRouteV1 {
    private readonly _path = '/network';
    private readonly _router = Router();

    private readonly controller : NetworkController;

    constructor(controller : NetworkController) {
        this.initializeRoutes();
        this.controller = controller;
    }

    private initializeRoutes() {
        this._router.get(`${this._path}/interface/:name`, (req: Request, res: Response) => {
            this.controller.getInterfaceByName(req, res);
        });
    }


    get router(): Router {
        return this._router;
    }

}