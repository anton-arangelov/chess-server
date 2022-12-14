import { Module } from '@nestjs/common';
import { ChessService } from './chess.service';
import { ChessResolver } from './chess.resolver';
import { PubSub } from 'graphql-subscriptions';

@Module({
  providers: [
    ChessResolver,
    ChessService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class ChessModule {}
