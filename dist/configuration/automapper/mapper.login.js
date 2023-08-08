"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMapper = void 0;
const login_result_1 = require("@/features/login/domain/entities/login-result");
const login_output_dto_1 = require("@/features/login/presentation/dto/login.output.dto");
const classes_1 = require("@automapper/classes");
const core_1 = require("@automapper/core");
exports.loginMapper = (0, core_1.createMapper)({
    name: 'login',
    pluginInitializer: classes_1.classes
});
exports.loginMapper
    .createMap(login_result_1.LoginResult, login_output_dto_1.LoginOutputDTO)
    .forMember((dst) => dst.numberBenefit, (0, core_1.mapFrom)((src) => src.numberBenefit));
//# sourceMappingURL=mapper.login.js.map