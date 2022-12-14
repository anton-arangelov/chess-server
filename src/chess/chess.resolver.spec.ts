import { Test, TestingModule } from '@nestjs/testing';
import { ChessResolver } from './chess.resolver';
import { ChessService } from './chess.service';

describe('ChessResolver', () => {
  let resolver: ChessResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChessResolver, ChessService],
    }).compile();

    resolver = module.get<ChessResolver>(ChessResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
