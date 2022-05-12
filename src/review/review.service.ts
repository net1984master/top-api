import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewModel, ReviewModelDocument } from './review.model';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewModelDocument>) {}
  async create(dto: CreateReviewDto) {
    const ret = await this.reviewModel.create(dto);
    return ret;
  }
}
