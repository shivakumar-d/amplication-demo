/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { Type } from "class-transformer";
import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ChatCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  chatName!: string;

  @ApiProperty({
    required: true,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @Field(() => CommunityWhereUniqueInput)
  communityId!: CommunityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutChatsInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutChatsInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutChatsInput, {
    nullable: true,
  })
  message?: MessageCreateNestedManyWithoutChatsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  messages?: InputJsonValue;
}

export { ChatCreateInput as ChatCreateInput };
