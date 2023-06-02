import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ChatCreateInput = {
  chatName: string;
  communityId: CommunityWhereUniqueInput;
  messages?: InputJsonValue;
};
