import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Chess {
  @Field(() => String)
  title: string;
}
