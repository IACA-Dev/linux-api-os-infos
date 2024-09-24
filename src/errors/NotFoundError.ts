import {CustomError} from "./CustomError";


export class NotFoundError extends CustomError {
    constructor(message: string, originalError?: Error) {
        super(`NOT_FOUND_ERROR : ${message}`, originalError);
    }
}