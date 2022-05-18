import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthModel, AuthModelDocument } from './auth.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel(AuthModel.name) private authModel: Model<AuthModelDocument>) {}

  async create(authModel: AuthModel): Promise<AuthModel> {
    const newAuthModel = new this.authModel(authModel);
    return newAuthModel.save();
  }

  async findOne(email: string): Promise<AuthModel | null> {
    return this.authModel.findOne({ email }).exec();
  }
  async findAll(): Promise<AuthModel[]> {
    return this.authModel.find({}).exec();
  }
}
