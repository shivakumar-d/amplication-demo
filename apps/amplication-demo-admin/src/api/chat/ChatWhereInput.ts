import { StringFilter } from "../../util/StringFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ChatWhereInput = {
  chatName?: StringFilter;
  communityId?: CommunityWhereUniqueInput;
  id?: StringFilter;
  message?: MessageListRelationFilter;
  messages?: JsonFilter;
};
