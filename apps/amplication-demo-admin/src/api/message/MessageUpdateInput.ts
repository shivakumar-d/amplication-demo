import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageUpdateManyWithoutMessagesInput } from "./MessageUpdateManyWithoutMessagesInput";
import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  agentIdtype?: string | null;
  chatId?: ChatWhereUniqueInput;
  isPoll?: boolean | null;
  message?: MessageWhereUniqueInput;
  messages?: MessageUpdateManyWithoutMessagesInput;
  options?: InputJsonValue;
  quesions?: string | null;
  userId?: string | null;
};
