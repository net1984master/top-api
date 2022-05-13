import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthModelDocument = AuthModel & Document;

export enum en1 {
  first,
  second,
  tret = 9,
}

@Schema({ timestamps: true })
export class AuthModel {
  @Prop({ unique: true })
  email: string;
  @Prop()
  passwordHash: string;
  @Prop()
  enel: en1;
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
