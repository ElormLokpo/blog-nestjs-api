import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('auth')
export class UserController{
    constructor( private readonly userservice: UserService ){}

    @Post('register')
    async register(
        @Body('username') username:string, 
        @Body('password') password:string,
        @Body('fullname') fullname:string
        ){
        const userdata = await this.userservice.registerUser(username,password, fullname);
        return userdata;
    }

}