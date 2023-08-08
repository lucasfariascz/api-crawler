"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const di_container_1 = __importDefault(require("./configuration/di-container"));
const inversify_express_utils_1 = require("inversify-express-utils");
const bodyParser = __importStar(require("body-parser"));
const log_service_impl_1 = require("./services/log/log-service.impl");
class App {
    constructor() {
        this.logs = new log_service_impl_1.LogServiceImpl();
        this.buildEnvConfig();
        this.express = new inversify_express_utils_1.InversifyExpressServer(di_container_1.default);
        this.middlewares();
    }
    buildEnvConfig() {
        const configPath = '.env.dev';
        this.logs.debug(`loading configpath: ${configPath}`);
        dotenv_1.default.config({
            path: configPath
        });
    }
    middlewares() {
        const server = this.express;
        server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map