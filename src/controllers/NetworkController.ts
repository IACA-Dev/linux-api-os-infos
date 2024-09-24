import {Request, Response} from "express";


export interface NetworkController {
    getInterfaceByName(req: Request, res: Response) : void;
}