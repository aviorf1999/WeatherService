import express = require('express');
import { usersService } from './users.service';

export class UsersController {
    public readonly path: string = '/users';
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/', usersService.create);
        this.router.get('/', usersService.readAll);
        this.router.get('/:userId', usersService.readById);
        this.router.put('/:userId', usersService.updateById);
        this.router.delete('/', usersService.deleteAll);
        this.router.delete('/:userId', usersService.deleteById);
    }
}