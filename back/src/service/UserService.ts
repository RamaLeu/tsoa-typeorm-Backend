import bodyParser = require('body-parser');
import { Request } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { UserResponse } from '../models/Response/user';

const userRepo = AppDataSource.getRepository(User);
export class UserService {
    public static async getUser(id: number): Promise<UserResponse> {
        console.log(id);
        const user = await userRepo.findOneBy({ id: id });

        return {
            firstName: user?.firstName,
            lastName: user?.lastName
        };
    }
    public static findOneUser(id: number): Promise<User> {
        return userRepo.findOneBy({ id: id });
    }
}
