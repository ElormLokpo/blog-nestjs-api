import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('auth')
export class UserController{
    constructor( private readonly userservice: UserService ){}

    @Post()
    async register(username:string, password:string){
        const userdata = await this.userservice.registerUser(username,password);
        return userdata;
    }

}