import { Injectable } from '@nestjs/common';
// Services
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
// Entity
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private _jwt: JwtService) {}

    async validateUser(authRef: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(authRef);

        if (user && user.password === pass) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user
        
            return result
        }
        
        return null;
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.id, role: user.role.name };
        return {
          access_token: this._jwt.sign(payload),
        };
    } 
}
