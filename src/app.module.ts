import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChessModule } from './chess/chess.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      subscriptions: {
        'graphql-ws': true,
      },
      path: '/graphql',
      playground: false,
      debug: true,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      cors: {
        credentials: true,
        origin: true,
      },
    }),
    ChessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
