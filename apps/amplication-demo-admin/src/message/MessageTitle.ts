import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "agentIdtype";

export const MessageTitle = (record: TMessage): string => {
  return record.agentIdtype || String(record.id);
};
