import { Community } from "../community/Community";
import { JsonValue } from "type-fest";

export type Chat = {
  chatName: string;
  communityId?: Community;
  createdAt: Date;
  id: string;
  messages: JsonValue;
  updatedAt: Date;
};
