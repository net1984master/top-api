import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthModelDocument = AuthModel & Document;

@Schema()
export class AuthModel {
  @Prop({ unique: true })
  email: string;
  @Prop()
  passwordHash: string;
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
