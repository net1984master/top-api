import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() authDto: AuthDto) {
    return this.authService.create(authDto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() authDto: AuthDto) {
    const user = await this.authService.validateUser(authDto.email, authDto.password);
    return this.authService.login(user.email);
  }

  @Get()
  async getAllUsers() {
    return this.authService.findAll();
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.authService.findOne(email);
  }
}
