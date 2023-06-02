import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunityServiceBase } from "./base/community.service.base";

@Injectable()
export class CommunityService extends CommunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
