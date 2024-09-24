import express from "express";
import cors from "cors";
import {Express} from "express";
import {VitalsRouteV1} from "./routes/VitalsRouteV1";
import {VitalsControllerImpl} from "./controllers/VitalsControllerImpl";
import {VitalsServiceImpl} from "./services/VitalsServiceImpl";
import {isNotUndefined} from "./utils/Types";
import bodyParser from "body-parser";

export default class Program {

    private readonly httpServer: Express;

    private readonly routes?: {
        v1: {
            vitals: VitalsRouteV1
        }
    }

    constructor() {
        this.httpServer = express();

        const vitalsController = new VitalsControllerImpl(new VitalsServiceImpl());
        this.routes = {
            v1: {
                vitals: new VitalsRouteV1(vitalsController)
            }
        };
    }

    private async init() {
        console.log('🌎️ Starting http server..');
        this.startHttpServer();
    }

    private startHttpServer() {
        const port = process.env.API_PORT || '8080';

        this.httpServer.use(cors());

        this.httpServer.use((req, res, next) => {
            console.log(`➡️ ${req.ip} | [${req.method.toUpperCase()}] - ${req.path}`)
            next();
        });

        this.httpServer.use(bodyParser.text({limit: '10mb'}));
        this.httpServer.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

        if (isNotUndefined(this.routes)) {
            this.httpServer.use(this.routes!.v1.vitals.router);
        }

        this.httpServer.listen(port, () => {
            console.log(`⚡️ Server is running at http://localhost:${port} ⚡️`);
        });
    }

    // ###############################################################################################################

    public static async start(): Promise<Program> {
        const program = new Program();
        await program.init()
        return program;
    }


    public dispose() {
        // Do nothing
    }
}