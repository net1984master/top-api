import { Injectable } from '@nestjs/common';
import { ReviewModel} from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewRepository: ReviewRepository) {}
  async create(dto: CreateReviewDto): Promise<ReviewModel> {
    return this.reviewRepository.create(dto);
  }

  async delete(id: string): Promise<ReviewModel | null> {
    return this.reviewRepository.delete(id);
  }

  async deleteByProductId(productId: string) {
    return this.reviewRepository.deleteByProductId(productId);
  }

  async findByProductId(productId: string): Promise<ReviewModel[]> {
    return this.reviewRepository.findByProductId(productId);
  }

}
