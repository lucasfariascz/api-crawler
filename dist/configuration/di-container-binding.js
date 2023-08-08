"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindControllers = exports.bindUseCases = exports.bindRepositories = void 0;
const types_1 = require("./types");
const login_controller_1 = require("@/features/login/presentation/controller/login.controller");
const login_use_case_impl_1 = require("@/features/login/domain/use-cases/login.use-case.impl");
const login_repositories_impl_1 = require("@/features/login/infra/repositories/login.repositories.impl");
function bindRepositories(DIContainer) {
    DIContainer.bind(types_1.TYPES.LoginRepository).to(login_repositories_impl_1.LoginRepositoriesImpl);
}
exports.bindRepositories = bindRepositories;
function bindUseCases(DIContainer) {
    DIContainer.bind(types_1.TYPES.LoginUseCase).to(login_use_case_impl_1.LoginUseCaseImpl);
}
exports.bindUseCases = bindUseCases;
function bindControllers(DIContainer) {
    DIContainer.bind(login_controller_1.LoginController).toSelf();
}
exports.bindControllers = bindControllers;
//# sourceMappingURL=di-container-binding.js.map