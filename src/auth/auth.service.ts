import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthModel, en1 } from './auth.model';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async create(authDto: AuthDto): Promise<AuthModel> {
    const authModel = new AuthModel();
    authModel.email = authDto.email;
    authModel.passwordHash = authDto.password;
    if (authModel.email == 'e1@m.ru') {
      authModel.enel = en1.first;
    } else if (authModel.email == 'e2@m.ru') {
      authModel.enel = en1.second;
    } else {
      authModel.enel = en1.tret;
    }
    return this.authRepository.create(authModel);
  }
  async findOne(email: string): Promise<AuthModel | null> {
    return this.authRepository.findOne(email);
  }
  async findAll(): Promise<AuthModel[]> {
    return this.authRepository.findAll();
  }
}
