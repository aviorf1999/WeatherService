import { SimulationService } from './service';
import io from 'socket.io-client';
import cliProgress from 'cli-progress';
const avgHeapUsage = 5836800;
export class App {
    dateArray: Array<JSON>;
    socket: SocketIOClient.Socket = io("http://localhost:3101");
    bar: cliProgress.SingleBar;
    constructor() {
        this.socket.connect()
        this.dateArray = [];
        this.bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_grey);
    }
    async buildArray(array: Array<JSON>) {
        try {
             SimulationService.buildUsedWeatherDataJsons(array)
             SimulationService.buildUnusedWeatherDataJsons(array)
             SimulationService.buildNull(array)
            SimulationService.buildYearlyUsedJsons(array)
            SimulationService.shuffle(array)
            this.bar.start(array.length - 1, 0);
            for (let i = 0; i < array.length; i++) {
                this.socket.emit("data", array[i])
                await new Promise(res => {
                    setTimeout(res, 10 * (process.memoryUsage().heapUsed / avgHeapUsage))
                })
                this.bar.update(i);
            }
            this.bar.stop();
            console.log("All data elements has been sent!")
        } catch (error) {
            console.log(error)
        }


    }
}