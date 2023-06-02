import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";
import { InputJsonValue } from "../../types";

export type ChatCreateInput = {
  chatName: string;
  communityId: CommunityWhereUniqueInput;
  message?: MessageCreateNestedManyWithoutChatsInput;
  messages?: InputJsonValue;
};
