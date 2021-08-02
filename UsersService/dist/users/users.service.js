"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_schema_1 = require("./users.schema");
const users_dto_1 = require("./dto/users.dto");
const updateUsers_dto_1 = require("./dto/updateUsers.dto");
class usersService {
    constructor() { }
    ;
    static async create(req, res) {
        try {
            const userDTO = new users_dto_1.CreateUserDTO(req.body.username, req.body.password, req.body.firstName, req.body.lastName, req.body.rank, req.body.personalNumber, req.body.city, req.body.age, req.body.tash, req.body.enlistmentDate, req.body.dob, req.body.pilot);
            users_schema_1.userModel.create(userDTO).then(result => {
                res.json(result);
            });
        }
        catch (err) {
            console.log(err);
            res.json({ message: err.message });
        }
    }
    static async readAll(req, res) {
        try {
            const users = await users_schema_1.userModel.find();
            res.json(users);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async readById(req, res) {
        try {
            const user = await users_schema_1.userModel.findById(req.params.userId);
            res.json(user);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    ;
    static async updateById(req, res) {
        try {
            var updatedUserDTO = new updateUsers_dto_1.UpdateUserDTO();
            updatedUserDTO.checkToEdit(req.body);
            users_schema_1.userModel.updateOne({ _id: req.params.userId }, updatedUserDTO).then(result => {
                res.json(result);
            });
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async deleteAll(req, res) {
        try {
            const users = await users_schema_1.userModel.find();
            if (users.length == 0) {
                res.json({ message: 'Users Model is already empty' });
            }
            else {
                for (let i = 0; i < users.length; i++) {
                    await users_schema_1.userModel.deleteOne({ _id: users[i]._id });
                }
                const result = await users_schema_1.userModel.find();
                if (result.length === 0) {
                    res.json({ message: 'All users have been removed' });
                }
                else {
                    res.json({ message: 'Delete all users action failed!' });
                }
            }
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    ;
    static async deleteById(req, res) {
        try {
            const removedUser = await users_schema_1.userModel.deleteOne({ _id: req.params.userId });
            res.json(removedUser);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
}
exports.usersService = usersService;
//# sourceMappingURL=users.service.js.map