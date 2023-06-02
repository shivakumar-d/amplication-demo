import { Community } from "../community/Community";
import { Message } from "../message/Message";
import { JsonValue } from "type-fest";

export type Chat = {
  chatName: string;
  communityId?: Community;
  createdAt: Date;
  id: string;
  message?: Array<Message>;
  messages: JsonValue;
  updatedAt: Date;
};
