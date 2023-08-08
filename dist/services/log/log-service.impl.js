"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogServiceImpl = void 0;
require("reflect-metadata");
const winston_1 = __importDefault(require("winston"));
const inversify_1 = require("inversify");
const log_object_1 = require("./log-object");
const safe_json_stringify_1 = __importDefault(require("safe-json-stringify"));
const { json } = winston_1.default.format;
let LogServiceImpl = class LogServiceImpl {
    getLogger() {
        return winston_1.default.createLogger({
            level: process.env.LOG_LEVEL,
            format: json(),
            transports: [
                new winston_1.default.transports.Console({
                    format: json()
                })
            ]
        });
    }
    getLogObject() {
        return {
            timestamp: new Date(),
            level: process.env.LOG_LEVEL
        };
    }
    info(message) {
        const logObj = this.getLogObject();
        logObj.content = message;
        this.getLogger().info((0, safe_json_stringify_1.default)(logObj));
    }
    debug(message) {
        const logObj = this.getLogObject();
        if (typeof message === 'string') {
            logObj.content = { message: message, resultType: log_object_1.ResultType.Success };
        }
        else {
            logObj.content = message;
        }
        this.getLogger().debug((0, safe_json_stringify_1.default)(logObj));
    }
    http(message) {
        const logObj = this.getLogObject();
        if (typeof message === 'string') {
            logObj.content = { message: message, resultType: log_object_1.ResultType.Success };
        }
        else {
            logObj.content = message;
        }
        this.getLogger().http((0, safe_json_stringify_1.default)(logObj));
    }
    error(message) {
        const logObj = this.getLogObject();
        if (typeof message === 'string') {
            logObj.content = { message: message, resultType: log_object_1.ResultType.Error };
        }
        else {
            logObj.content = message;
        }
        this.getLogger().error((0, safe_json_stringify_1.default)(logObj));
    }
};
LogServiceImpl = __decorate([
    (0, inversify_1.injectable)()
], LogServiceImpl);
exports.LogServiceImpl = LogServiceImpl;
//# sourceMappingURL=log-service.impl.js.map