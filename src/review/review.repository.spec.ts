import { Test, TestingModule } from '@nestjs/testing';
import { ReviewRepository } from './review.repository';
import { getModelToken } from '@nestjs/mongoose';
import { Schema, Types } from 'mongoose';

describe('ReviewRepository', () => {
  let provider: ReviewRepository;

  const exec = { exec: jest.fn() };
  const reviewRepositoryFactory = () => ({
    find: () => exec,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewRepository,
        { useFactory: reviewRepositoryFactory, provide: getModelToken('ReviewModel') }],
    }).compile();

    provider = module.get<ReviewRepository>(ReviewRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
  it('findByProductId working', async () => {
    const id = new Types.ObjectId().toHexString();
    reviewRepositoryFactory()
      .find()
      .exec.mockReturnValueOnce([{ productId: id }]);
    const res = await provider.findByProductId(id);
    expect(res[0].productId).toBe(id);
  });
});
