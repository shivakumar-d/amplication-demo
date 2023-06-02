import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunityService } from "./community.service";
import { CommunityControllerBase } from "./base/community.controller.base";

@swagger.ApiTags("communities")
@common.Controller("communities")
export class CommunityController extends CommunityControllerBase {
  constructor(protected readonly service: CommunityService) {
    super(service);
  }
}
