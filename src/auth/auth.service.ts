import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthModel, tst2 } from './auth.model';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async create(authDto: AuthDto): Promise<AuthModel> {
    const authModel = new AuthModel();
    authModel.email = authDto.email;
    authModel.passwordHash = authDto.password;
    const tst1 = new tst2();
    const tst3 = new tst2();
    tst1.name = 'Name1';
    tst1.value = 'Value1';
    tst3.name = 'Name3';
    tst3.value = 'Value3';
    authModel.tst = [tst1];
    authModel.tst.push(tst3);
    return this.authRepository.create(authModel);
  }
  async findOne(email: string): Promise<AuthModel | null> {
    return this.authRepository.findOne(email);
  }
  async findAll(): Promise<AuthModel[]> {
    return this.authRepository.findAll();
  }
}
