/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateChatArgs } from "./CreateChatArgs";
import { UpdateChatArgs } from "./UpdateChatArgs";
import { DeleteChatArgs } from "./DeleteChatArgs";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatFindUniqueArgs } from "./ChatFindUniqueArgs";
import { Chat } from "./Chat";
import { Community } from "../../community/base/Community";
import { ChatService } from "../chat.service";
@graphql.Resolver(() => Chat)
export class ChatResolverBase {
  constructor(protected readonly service: ChatService) {}

  async _chatsMeta(
    @graphql.Args() args: ChatFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Chat])
  async chats(@graphql.Args() args: ChatFindManyArgs): Promise<Chat[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Chat, { nullable: true })
  async chat(@graphql.Args() args: ChatFindUniqueArgs): Promise<Chat | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Chat)
  async createChat(@graphql.Args() args: CreateChatArgs): Promise<Chat> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        communityId: {
          connect: args.data.communityId,
        },
      },
    });
  }

  @graphql.Mutation(() => Chat)
  async updateChat(@graphql.Args() args: UpdateChatArgs): Promise<Chat | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          communityId: {
            connect: args.data.communityId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chat)
  async deleteChat(@graphql.Args() args: DeleteChatArgs): Promise<Chat | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Community, {
    nullable: true,
    name: "communityId",
  })
  async resolveFieldCommunityId(
    @graphql.Parent() parent: Chat
  ): Promise<Community | null> {
    const result = await this.service.getCommunityId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
