import { Post, Request , Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authservice: AuthService
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){
        let token = this.authservice.createToken(req.user);
        return token; 
    }

}