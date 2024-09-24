import {VitalsService} from "./VitalsService";
import {VitalsModel} from "../models/VitalsModel";
import * as os from 'os'


export class VitalsServiceImpl implements VitalsService {
    async getAll(): Promise<VitalsModel[]> {
        return [
            {
                name: 'total ram',
                unit: 'bytes',
                value: os.totalmem(),
                id: 0
            },
            {
                name: 'used ram',
                unit: 'bytes',
                value: os.totalmem() - os.freemem(),
                id: 1
            },
            {
                name: 'cpu usage',
                unit: '%',
                value: await this.getCpuUsage(),
                id: 2
            }
        ];
    }

    private async getCpuUsage() {
        const startMeasure = this.getCpuInfo();

        await new Promise(resolve => setTimeout(resolve, 100));

        const endMeasure = this.getCpuInfo();


        const idleDifference = endMeasure.idle - startMeasure.idle;
        const totalDifference = endMeasure.total - startMeasure.total;

        return 100 - Math.round(100 * idleDifference / totalDifference);
    }

    private getCpuInfo() {
        const cpus = os.cpus();

        let totalIdle = 0, totalTick = 0;

        cpus.forEach(cpu => {
            totalTick += cpu.times.idle + cpu.times.irq + cpu.times.nice + cpu.times.sys + cpu.times.user;
            totalIdle += cpu.times.idle;
        });

        return {idle: totalIdle / cpus.length, total: totalTick / cpus.length};
    }


}