import { Args, Query, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { ChessService } from './chess.service';
import { Chess } from './entities/chess.entity';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';

const mock: Chess = {
  title: 'Alex',
};

@Resolver(() => Chess)
export class ChessResolver {
  constructor(
    @Inject('PUB_SUB') private readonly pubSub: PubSub,
    private readonly chessService: ChessService,
  ) {}

  @Query(() => Chess)
  getChess() {
    return mock;
  }

  @Subscription(() => Chess, {
    name: 'titleChanged',
  })
  subscribeToTitleChanged() {
    return this.pubSub.asyncIterator('titleChanged');
  }

  @Mutation(() => Chess)
  changeName(@Args('title', { type: () => String }) title: string) {
    const newChess = { ...mock, title };

    this.pubSub.publish('titleChanged', { titleChanged: newChess });
    return newChess;
  }
}
