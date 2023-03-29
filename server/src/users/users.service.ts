import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import { UserInterface } from './users.dto';
const bcrypt = require('bcrypt');


@Injectable()
export class UserService{
    constructor(
        @InjectModel('UsersModel') private readonly usersmodel: Model<UserInterface>
    ){}


    async registerUser(username:string, password:string){
        const userdata = await this.usersmodel.create({username, password});
        return userdata;
    }

    async validateUser(username:string, password: string){
        const userdata = await this.usersmodel.findOne({username});
    
        const is_valid = await bcrypt.compare(password, userdata.password);
        
        if (is_valid){
            return userdata;
        }

        return null;
    }
}