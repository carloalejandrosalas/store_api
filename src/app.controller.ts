import { Controller, Get, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
// Services
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
// Guards
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private _auth: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(200)
  async login(@Request() req) {
    return this._auth.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile (@Request() req) {
    return req.user
  }
}
