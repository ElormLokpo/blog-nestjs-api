import {Injectable} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService{
    constructor(
        private readonly jwtservice: JwtService
    ){}


    async createToken(user:any){
        const payload = {username:user.username, id:user._id};
        let token = this.jwtservice.sign(payload);
        return {user, token};        
    }
}