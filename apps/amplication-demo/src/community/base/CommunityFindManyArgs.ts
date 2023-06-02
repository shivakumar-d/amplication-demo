/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommunityWhereInput } from "./CommunityWhereInput";
import { Type } from "class-transformer";
import { CommunityOrderByInput } from "./CommunityOrderByInput";

@ArgsType()
class CommunityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommunityWhereInput,
  })
  @Field(() => CommunityWhereInput, { nullable: true })
  @Type(() => CommunityWhereInput)
  where?: CommunityWhereInput;

  @ApiProperty({
    required: false,
    type: [CommunityOrderByInput],
  })
  @Field(() => [CommunityOrderByInput], { nullable: true })
  @Type(() => CommunityOrderByInput)
  orderBy?: Array<CommunityOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CommunityFindManyArgs as CommunityFindManyArgs };