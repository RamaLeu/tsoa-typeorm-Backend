import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { UserService } from '../service/UserService';
import { Controller, Get, Path, Route } from 'tsoa';
import { UserResponse } from '../models/Response/user';

@Route('users')
export class UserController extends Controller {
    @Get('{userId}')
    public async getUser(@Path() userId: number): Promise<UserResponse> {
        return UserService.getUser(userId);
    }
    // private userRepository = AppDataSource.getRepository(User);
    // FindAllUsers(request: Request, response: Response, next: NextFunction): Promise<User[]> {
    //     return UserService.getAllUsers();
    // }
    // FindOneUser(request: Request, response: Response, next: NextFunction): Promise<User> {
    //     return UserService.findOneUser(parseInt(request.params.id, 10));
    // }
    // CreateNewUser(request: Request, response: Response, next: NextFunction) {
    //     return this.userRepository.save(request.body);
    // }
    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOneBy({ id: parseInt(request.params.id, 10) });
    //     await this.userRepository.remove(userToRemove);
    // }
}
