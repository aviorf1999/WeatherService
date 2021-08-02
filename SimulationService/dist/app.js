"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const cli_progress_1 = __importDefault(require("cli-progress"));
const avgHeapUsage = 5836800;
class App {
    constructor() {
        this.socket = socket_io_client_1.default("http://localhost:3101");
        this.socket.connect();
        this.dateArray = [];
        this.bar = new cli_progress_1.default.SingleBar({}, cli_progress_1.default.Presets.shades_grey);
    }
    buildArray(array) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                service_1.SimulationService.buildUsedWeatherDataJsons(array);
                service_1.SimulationService.buildUnusedWeatherDataJsons(array);
                service_1.SimulationService.buildNull(array);
                service_1.SimulationService.buildYearlyUsedJsons(array);
                service_1.SimulationService.shuffle(array);
                this.bar.start(array.length - 1, 0);
                for (let i = 0; i < array.length; i++) {
                    this.socket.emit("data", array[i]);
                    yield new Promise(res => {
                        setTimeout(res, 10 * (process.memoryUsage().heapUsed / avgHeapUsage));
                    });
                    this.bar.update(i);
                }
                this.bar.stop();
                console.log("All data elements has been sent!");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.App = App;
