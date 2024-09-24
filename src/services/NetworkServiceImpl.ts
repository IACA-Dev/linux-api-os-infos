import {InterfaceModel} from "../models/InterfaceModel";
import {NetworkService} from "./NetworkService";

import {networkInterfaces} from 'os';
import {isNotUndefined} from "../utils/Types";
import {NotFoundError} from "../errors/NotFoundError";


export class NetworkServiceImpl implements NetworkService {

    async getInterfaceByName(name: string): Promise<InterfaceModel> {

        const interfaces = networkInterfaces();
        const interfaceList = interfaces[name];

        if (!isNotUndefined(interfaceList) || interfaceList!.length === 0)
            throw new NotFoundError(`Interface '${name}' not found.`);

        const interfaceDetails = interfaceList![0];

        return {
            mac: interfaceDetails.mac,
            name: name,
            mask: interfaceDetails.netmask,
            ip: interfaceDetails.address
        }
    }

}