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
      playground: {
        settings: {
          'editor.theme': 'light', // use value dark if you want a dark theme in the playground
          'request.credentials': 'omit',
        },
      },
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*/graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => {
        return { req };
      },
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
