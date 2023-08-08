"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const api_crewler_config_1 = require("./shared/config/api-crewler-config");
const _port = (0, api_crewler_config_1.port)();
const server = app_1.default.build();
server
    .listen(_port, () => {
    console.log('Application running on port: ' + _port);
})
    .setTimeout(60 * 5 * 1000);
//# sourceMappingURL=server.js.map