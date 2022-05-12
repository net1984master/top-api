import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ReviewModelDocument = ReviewModel & Document;

@Schema({ timestamps: true })
export class ReviewModel {
  @Prop()
  name: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  rating: number;
  @Prop()
  productId: Types.ObjectId;
  // @Prop()
  //  createdAt: Date;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
