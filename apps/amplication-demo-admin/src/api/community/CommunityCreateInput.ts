import { ChatCreateNestedManyWithoutCommunitiesInput } from "./ChatCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  audience?: string | null;
  chats?: ChatCreateNestedManyWithoutCommunitiesInput;
  communityAge?: string | null;
  communityBio?: string | null;
  communityInterest?: string | null;
  communityLanguage: string;
  communityMembers?: string | null;
  communityName: string;
  communityProf?: string | null;
  communityQualification?: string | null;
  imageUrl: string;
  insights?: string | null;
  isActive?: boolean | null;
};
