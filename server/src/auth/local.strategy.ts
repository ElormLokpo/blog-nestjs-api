import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly userservice:UserService
    ){
        super();
    }


    async validate(username:string , password:string){
        const userdata = await this.userservice.validateUser(username, password);
        return userdata;
    }
} 


