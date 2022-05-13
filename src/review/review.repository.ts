import { Injectable } from '@nestjs/common';
import { ReviewModel, ReviewModelDocument } from './review.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewRepository {
  constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewModelDocument>) {}

  async create(newReview: CreateReviewDto): Promise<ReviewModelDocument> {
    return this.reviewModel.create(newReview);
  }

  async delete(id: string): Promise<ReviewModelDocument | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId }).exec();
  }

  async findByProductId(productId: string): Promise<ReviewModelDocument[]> {
    return this.reviewModel.find({ productId }).exec();
  }
}
