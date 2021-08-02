import { userModel } from './users.schema';
import { CreateUserDTO } from './dto/users.dto';
import { UpdateUserDTO } from './dto/updateUsers.dto';
export class usersService {
    constructor() { };
    public static async create(req: any, res: any) {
        try {
            const userDTO = new CreateUserDTO(
                req.body.username,
                req.body.password,
                req.body.firstName,
                req.body.lastName,
                req.body.rank,
                req.body.personalNumber,
                req.body.city,
                req.body.age,
                req.body.tash,
                req.body.enlistmentDate,
                req.body.dob,
                req.body.pilot
            );
            userModel.create(userDTO).then(result => {
                res.json(result);
            })
        } catch (err) {
            console.log(err)
            res.json({ message: err.message });
        }
    }
    public static async readAll(req: any, res: any) {
        try {
            const users = await userModel.find();
            res.json(users);
        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async readById(req: any, res: any) {
        try {
            const user = await userModel.findById(req.params.userId);
            res.json(user);
        } catch (err) {
            res.json({ message: err.message });
        }
    };
    public static async updateById(req: any, res: any) {
        try {
            var updatedUserDTO = new UpdateUserDTO();
            updatedUserDTO.checkToEdit(req.body);
            userModel.updateOne({ _id: req.params.userId }, updatedUserDTO).then(result => {
                res.json(result);
            });
        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async deleteAll(req: any, res: any) {
        try {
            const users = await userModel.find();

            if (users.length == 0) {
                res.json({ message: 'Users Model is already empty' });
            }
            else {
                for (let i = 0; i < users.length; i++) {
                    await userModel.deleteOne({ _id: users[i]._id });
                }
                const result = await userModel.find();
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
    };
    public static async deleteById(req: any, res: any) {
        try {
            const removedUser = await userModel.deleteOne({ _id: req.params.userId });
            res.json(removedUser);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
}
