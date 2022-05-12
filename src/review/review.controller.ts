import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { ReviewModelDocument } from './review.model';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}
  @Post('create')
  async create_for_my_test(@Body() dto: CreateReviewDto) {
    const r1 = await this.reviewService.create(dto);
    const r2: { name: string; title: string } = r1;
    //const ret: Omit<ReviewModelDocument, '__v'> = await this.reviewService.create(dto);
    //const ret = await this.reviewService.create(dto);
    //delete ret.__v;
    return r2;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
