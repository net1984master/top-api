import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsNumber()
  @Min(1, { message: 'Рейтинг должен быть от 1 до 5' })
  @Max(5, { message: 'Рейтинг должен быть от 1 до 5' })
  rating: number;
  @IsString()
  productId: string;
}
