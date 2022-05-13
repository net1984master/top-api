import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthModel } from './auth.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return this.authService.create(authDto);
  }

  @Get()
  async getAllUsers() {
    return this.authService.findAll();
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.authService.findOne(email);
  }

  // @Post('register')
  // async register(@Body() dto: AuthDto) {
  //   return 'hi2';
  // }

  // @HttpCode(200)
  // @Post('login')
  // async login(@Body() dto: AuthDto) {
  //   return 'hello';
  // }
}
