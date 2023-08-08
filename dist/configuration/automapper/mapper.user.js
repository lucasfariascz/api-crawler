"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const user_1 = require("../../features/user/domain/entities/user");
const create_user_output_dto_1 = require("../../features/user/presentation/dto/create-user-output.dto");
const classes_1 = require("@automapper/classes");
const core_1 = require("@automapper/core");
exports.userMapper = (0, core_1.createMapper)({
    name: 'user',
    pluginInitializer: classes_1.classes
});
exports.userMapper
    .createMap(user_1.User, create_user_output_dto_1.CreateUserOutputDTO)
    .forMember((dst) => dst.name, (0, core_1.mapFrom)((src) => src.name))
    .forMember((dst) => dst.email, (0, core_1.mapFrom)((src) => src.email))
    .forMember((dst) => dst.password, (0, core_1.mapFrom)((src) => src.password));
//# sourceMappingURL=mapper.user.js.map