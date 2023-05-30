import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports:[
        UsersModule,
        JwtModule.register({
            secret: 'SHAMBALA',
            signOptions: {expiresIn: '30d'}
        })
    ],
    controllers:[AuthController],
    providers: [ LocalStrategy, JwtStrategy, AuthService]
})
export class AuthModule{}