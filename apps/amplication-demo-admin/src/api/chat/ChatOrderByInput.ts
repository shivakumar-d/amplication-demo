import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  chatName?: SortOrder;
  communityIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  messages?: SortOrder;
  updatedAt?: SortOrder;
};
