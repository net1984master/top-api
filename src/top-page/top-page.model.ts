import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Goods,
}

export class HhData {
  @Prop()
  count: number;
  @Prop()
  juniorSalary: number;
  @Prop()
  middleSalary: number;
  @Prop()
  seniorSalary: number;
}

export class TopPageAdvantages {
  @Prop()
  title: string;
  @Prop()
  description: string;
}

export class TopPageModel {
  @Prop()
  firstLevelCategory: TopLevelCategory;
  @Prop()
  secondCategory: string;
  @Prop({ unique: true })
  alias: string;
  @Prop()
  title: string;
  @Prop()
  category: string;
  hh?: HhData;
  advantages: TopPageAdvantages[];
  @Prop()
  seoText: string;
  @Prop()
  tagsTitle: string;
  @Prop()
  tags: string[];
}

export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);
export type TopPageModelDocument = TopPageModel & Document;
