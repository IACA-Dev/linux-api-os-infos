import {Request, Response} from "express";
import {NetworkController} from "./NetworkController";
import {isUndefined} from "../utils/Types";
import {NetworkService} from "../services/NetworkService";
import {NotFoundError} from "../errors/NotFoundError";


export class NetworkControllerImpl implements NetworkController {

    private readonly service: NetworkService;

    constructor(service: NetworkService) {
        this.service = service;
    }

    // ---------------------------------------------------------------------------------------------------------------

    getInterfaceByName(req: Request, res: Response): void {
        const name = req.params.name;

        if (isUndefined(name)) {
            res.status(300).send('Missing interface name.');
        } else {
            this.service.getInterfaceByName(name)
                .then(value => {
                    res.end(JSON.stringify(value));
                }).catch((err) => {
                if (err instanceof NotFoundError)
                    res.status(404).end(`Interface '${name}' not found.`);
                else {
                    console.error(err);
                    res.status(500).end(JSON.stringify(err));
                }
            });
        }
    }
}