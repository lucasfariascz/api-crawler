"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const login_1 = require("../../domain/entities/login");
const mapper_login_1 = require("../../../../configuration/automapper/mapper.login");
const login_output_dto_1 = require("../dto/login.output.dto");
const types_1 = require("@/configuration/types");
const login_result_1 = require("../../domain/entities/login-result");
let LoginController = class LoginController {
    constructor(LoginUseCase) {
        this.LoginUseCase = LoginUseCase;
    }
    async Login(request) {
        const input = request.body;
        const login = new login_1.Login();
        login.name = input.name;
        login.password = input.password;
        return this.LoginUseCase.execute(login).then((login) => {
            return mapper_login_1.loginMapper.map(login, login_output_dto_1.LoginOutputDTO, login_result_1.LoginResult);
        });
    }
};
__decorate([
    (0, inversify_express_utils_1.httpPost)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "Login", null);
LoginController = __decorate([
    (0, inversify_express_utils_1.controller)('/login'),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.LoginUseCase)),
    __metadata("design:paramtypes", [Object])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map