import { StringFilter } from "../../util/StringFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ChatWhereInput = {
  chatName?: StringFilter;
  communityId?: CommunityWhereUniqueInput;
  id?: StringFilter;
  messages?: JsonFilter;
};
