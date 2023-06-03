import { CommunityWhereInput } from "./CommunityWhereInput";
import { CommunityOrderByInput } from "./CommunityOrderByInput";

export type CommunityFindManyArgs = {
  where?: CommunityWhereInput;
  orderBy?: Array<CommunityOrderByInput>;
  skip?: number;
  take?: number;
};
