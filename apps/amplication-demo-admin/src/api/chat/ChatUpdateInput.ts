import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";
import { InputJsonValue } from "../../types";

export type ChatUpdateInput = {
  chatName?: string;
  communityId?: CommunityWhereUniqueInput;
  message?: MessageUpdateManyWithoutChatsInput;
  messages?: InputJsonValue;
};
