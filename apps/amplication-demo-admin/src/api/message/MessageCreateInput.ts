import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageCreateNestedManyWithoutMessagesInput } from "./MessageCreateNestedManyWithoutMessagesInput";
import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  agentIdtype?: string | null;
  chatId: ChatWhereUniqueInput;
  isPoll?: boolean | null;
  message: MessageWhereUniqueInput;
  messages?: MessageCreateNestedManyWithoutMessagesInput;
  options?: InputJsonValue;
  quesions?: string | null;
  userId?: string | null;
};
