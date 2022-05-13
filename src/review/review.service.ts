import { Injectable } from '@nestjs/common';
import { ReviewModelDocument } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}
  async create(dto: CreateReviewDto): Promise<ReviewModelDocument> {
    return this.reviewRepository.create(dto);
  }

  async delete(id: string): Promise<ReviewModelDocument | null> {
    return this.reviewRepository.delete(id);
  }

  async findByProductId(productId: string): Promise<ReviewModelDocument[]> {
    return this.reviewRepository.findByProductId(productId);
  }
}
