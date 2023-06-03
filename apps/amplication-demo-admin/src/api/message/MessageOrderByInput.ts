import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  agentIdtype?: SortOrder;
  chatIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPoll?: SortOrder;
  messageId?: SortOrder;
  options?: SortOrder;
  quesions?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
