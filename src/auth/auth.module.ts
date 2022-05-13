import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModel, AuthModelSchema } from './auth.model';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';

@Module({
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([{ name: AuthModel.name, schema: AuthModelSchema }])],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
