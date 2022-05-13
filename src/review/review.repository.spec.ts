import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRepository } from './review.repository';

describe('ReviewRepository', () => {
  let provider: ReviewRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewRepository],
    }).compile();

    provider = module.get<ReviewRepository>(ReviewRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
