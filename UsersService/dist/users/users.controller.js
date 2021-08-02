"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_service_1 = require("./users.service");
class UsersController {
    constructor() {
        this.path = '/users';
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/', users_service_1.usersService.create);
        this.router.get('/', users_service_1.usersService.readAll);
        this.router.get('/:userId', users_service_1.usersService.readById);
        this.router.put('/:userId', users_service_1.usersService.updateById);
        this.router.delete('/', users_service_1.usersService.deleteAll);
        this.router.delete('/:userId', users_service_1.usersService.deleteById);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map