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
import { CreateCommunityArgs } from "./CreateCommunityArgs";
import { UpdateCommunityArgs } from "./UpdateCommunityArgs";
import { DeleteCommunityArgs } from "./DeleteCommunityArgs";
import { CommunityFindManyArgs } from "./CommunityFindManyArgs";
import { CommunityFindUniqueArgs } from "./CommunityFindUniqueArgs";
import { Community } from "./Community";
import { CommunityService } from "../community.service";
@graphql.Resolver(() => Community)
export class CommunityResolverBase {
  constructor(protected readonly service: CommunityService) {}

  async _communitiesMeta(
    @graphql.Args() args: CommunityFindManyArgs
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

  @graphql.Query(() => [Community])
  async communities(
    @graphql.Args() args: CommunityFindManyArgs
  ): Promise<Community[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Community, { nullable: true })
  async community(
    @graphql.Args() args: CommunityFindUniqueArgs
  ): Promise<Community | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Community)
  async createCommunity(
    @graphql.Args() args: CreateCommunityArgs
  ): Promise<Community> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Community)
  async updateCommunity(
    @graphql.Args() args: UpdateCommunityArgs
  ): Promise<Community | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Community)
  async deleteCommunity(
    @graphql.Args() args: DeleteCommunityArgs
  ): Promise<Community | null> {
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
}