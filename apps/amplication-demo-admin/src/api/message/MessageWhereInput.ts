import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageWhereUniqueInput } from "./MessageWhereUniqueInput";
import { MessageListRelationFilter } from "./MessageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MessageWhereInput = {
  agentIdtype?: StringNullableFilter;
  chatId?: ChatWhereUniqueInput;
  id?: StringFilter;
  isPoll?: BooleanNullableFilter;
  message?: MessageWhereUniqueInput;
  messages?: MessageListRelationFilter;
  options?: JsonFilter;
  quesions?: StringNullableFilter;
  userId?: StringNullableFilter;
};
