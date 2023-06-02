import * as graphql from "@nestjs/graphql";
import { CommunityResolverBase } from "./base/community.resolver.base";
import { Community } from "./base/Community";
import { CommunityService } from "./community.service";

@graphql.Resolver(() => Community)
export class CommunityResolver extends CommunityResolverBase {
  constructor(protected readonly service: CommunityService) {
    super(service);
  }
}
