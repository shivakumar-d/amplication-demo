import { Module } from "@nestjs/common";
import { CommunityModuleBase } from "./base/community.module.base";
import { CommunityService } from "./community.service";
import { CommunityController } from "./community.controller";
import { CommunityResolver } from "./community.resolver";

@Module({
  imports: [CommunityModuleBase],
  controllers: [CommunityController],
  providers: [CommunityService, CommunityResolver],
  exports: [CommunityService],
})
export class CommunityModule {}
