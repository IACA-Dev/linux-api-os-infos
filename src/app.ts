import * as dotenv from 'dotenv';
import Program from "./Program";

function setupSignals(program : Program) {
    process.on('SIGINT', function () {
        console.log('EXIT : Disposing..');
        program.dispose();
        console.log('Bye !')
        process.exit(0);
    });
}

async function run() {
    console.log('Program starting..')
    dotenv.config();
    const program = await Program.start();
    setupSignals(program);
    console.log('Program started.')
}

run().then().catch(reason => {
    console.error(reason);
});