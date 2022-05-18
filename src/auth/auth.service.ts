import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthModel } from './auth.model';
import { AuthDto } from './dto/auth.dto';
import { compare, genSaltSync, hashSync } from 'bcryptjs';
import { ALREADY_REGISTERED_ERROR, BAD_PASSWORD_ERROR, USER_NOT_FOUND_ERROR } from './auth.constant';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository, private readonly jwtService: JwtService) {}

  async create(authDto: AuthDto): Promise<AuthModel> {
    if (await this.findOne(authDto.email)) {
      throw new ConflictException(ALREADY_REGISTERED_ERROR);
    }

    const salt = genSaltSync(10);
    const newAuthModel = new AuthModel();
    newAuthModel.email = authDto.email;
    newAuthModel.passwordHash = hashSync(authDto.password, salt);
    return this.authRepository.create(newAuthModel);
  }
  async findOne(email: string): Promise<AuthModel | null> {
    return this.authRepository.findOne(email);
  }
  async findAll(): Promise<AuthModel[]> {
    return this.authRepository.findAll();
  }

  async validateUser(email: string, password: string): Promise<Pick<AuthModel, 'email'>> {
    const user = await this.findOne(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }
    if (!(await compare(password, user.passwordHash))) {
      throw new UnauthorizedException(BAD_PASSWORD_ERROR);
    }
    return { email: user.email };
  }

  async login(email: string) {
    const payload = { email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
