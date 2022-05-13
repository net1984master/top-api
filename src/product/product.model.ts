import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class ProductCharacteristics {
  @Prop()
  name: string;
  @Prop()
  value: string;
}

export type ProductModelDocument = ProductModel & Document;

@Schema({ timestamps: true })
export class ProductModel {
  @Prop()
  image: string;
  @Prop()
  title: string;
  @Prop()
  price: number;
  @Prop()
  oldPrice: number;
  @Prop()
  credit: number;
  @Prop()
  calculatedRating: number;
  @Prop()
  description: string;
  @Prop()
  advantages: string;
  @Prop()
  disAdvantages: string;
  @Prop()
  categories: string[];
  @Prop()
  tags: string[];
  characteristics: ProductCharacteristics[];
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);
