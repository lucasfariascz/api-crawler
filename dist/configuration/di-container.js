"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const di_container_binding_1 = require("./di-container-binding");
const DIContainer = new inversify_1.Container();
(0, di_container_binding_1.bindRepositories)(DIContainer);
(0, di_container_binding_1.bindUseCases)(DIContainer);
(0, di_container_binding_1.bindControllers)(DIContainer);
exports.default = DIContainer;
//# sourceMappingURL=di-container.js.map