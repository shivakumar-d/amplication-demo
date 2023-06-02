/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommunityService } from "../community.service";
import { CommunityCreateInput } from "./CommunityCreateInput";
import { CommunityWhereInput } from "./CommunityWhereInput";
import { CommunityWhereUniqueInput } from "./CommunityWhereUniqueInput";
import { CommunityFindManyArgs } from "./CommunityFindManyArgs";
import { CommunityUpdateInput } from "./CommunityUpdateInput";
import { Community } from "./Community";

export class CommunityControllerBase {
  constructor(protected readonly service: CommunityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Community })
  async create(@common.Body() data: CommunityCreateInput): Promise<Community> {
    return await this.service.create({
      data: data,
      select: {
        audience: true,
        communityAge: true,
        communityBio: true,
        communityInterest: true,
        communityLanguage: true,
        communityMembers: true,
        communityName: true,
        communityProf: true,
        communityQualification: true,
        createdAt: true,
        id: true,
        imageUrl: true,
        insights: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Community] })
  @ApiNestedQuery(CommunityFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Community[]> {
    const args = plainToClass(CommunityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        audience: true,
        communityAge: true,
        communityBio: true,
        communityInterest: true,
        communityLanguage: true,
        communityMembers: true,
        communityName: true,
        communityProf: true,
        communityQualification: true,
        createdAt: true,
        id: true,
        imageUrl: true,
        insights: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: CommunityWhereUniqueInput
  ): Promise<Community | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        audience: true,
        communityAge: true,
        communityBio: true,
        communityInterest: true,
        communityLanguage: true,
        communityMembers: true,
        communityName: true,
        communityProf: true,
        communityQualification: true,
        createdAt: true,
        id: true,
        imageUrl: true,
        insights: true,
        isActive: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: CommunityWhereUniqueInput,
    @common.Body() data: CommunityUpdateInput
  ): Promise<Community | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          audience: true,
          communityAge: true,
          communityBio: true,
          communityInterest: true,
          communityLanguage: true,
          communityMembers: true,
          communityName: true,
          communityProf: true,
          communityQualification: true,
          createdAt: true,
          id: true,
          imageUrl: true,
          insights: true,
          isActive: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: CommunityWhereUniqueInput
  ): Promise<Community | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          audience: true,
          communityAge: true,
          communityBio: true,
          communityInterest: true,
          communityLanguage: true,
          communityMembers: true,
          communityName: true,
          communityProf: true,
          communityQualification: true,
          createdAt: true,
          id: true,
          imageUrl: true,
          insights: true,
          isActive: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
