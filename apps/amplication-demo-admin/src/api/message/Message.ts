import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";

export type Message = {
  agentIdtype: string | null;
  chatId?: Chat;
  createdAt: Date;
  id: string;
  isPoll: boolean | null;
  message?: Message;
  messages?: Array<Message>;
  options: JsonValue;
  quesions: string | null;
  updatedAt: Date;
  userId: string | null;
};
