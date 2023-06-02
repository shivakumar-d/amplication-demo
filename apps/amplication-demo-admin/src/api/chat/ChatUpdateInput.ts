import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ChatUpdateInput = {
  chatName?: string;
  communityId?: CommunityWhereUniqueInput;
  messages?: InputJsonValue;
};
