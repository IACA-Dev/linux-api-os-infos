import {VitalsService} from "./VitalsService";
import {VitalsModel} from "../models/VitalsModel";


export class VitalsServiceImpl implements VitalsService {
    getAll(): VitalsModel[] {

        return [
            {
                name: 'Heart Rate',
                value: Math.random() * 100,
                unit: 'bpm',
                max: 100
            },
            {
                name: 'Blood Pressure',
                value: Math.random() * 200,
                unit: 'mmHg',
                max: 200
            },
            {
                name: 'Respiratory Rate',
                value: Math.random() * 30,
                unit: 'breaths/min',
                max: 30
            },
            {
                name: 'Temperature',
                value: Math.random() * 40,
                unit: '°C',
                max: 40
            }
        ];
    }

}