"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const defaultPort = 3000;
const port = () => {
    const value = Number(process.env.PORT);
    return isNaN(value) ? defaultPort : value;
};
exports.port = port;
//# sourceMappingURL=api-crewler-config.js.map