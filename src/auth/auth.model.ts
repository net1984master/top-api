import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthModelDocument = AuthModel & Document;

export class tst2 {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

@Schema({ timestamps: true })
export class AuthModel {
  @Prop({ unique: true })
  email: string;
  @Prop()
  passwordHash: string;
  @Prop({ _id: false })
  tst: [tst2];
}

export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
