import { SortOrder } from "../../util/SortOrder";

export type CommunityOrderByInput = {
  audience?: SortOrder;
  communityAge?: SortOrder;
  communityBio?: SortOrder;
  communityInterest?: SortOrder;
  communityLanguage?: SortOrder;
  communityMembers?: SortOrder;
  communityName?: SortOrder;
  communityProf?: SortOrder;
  communityQualification?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  insights?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
};
