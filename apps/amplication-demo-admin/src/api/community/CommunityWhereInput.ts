import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CommunityWhereInput = {
  audience?: StringNullableFilter;
  communityAge?: StringNullableFilter;
  communityBio?: StringNullableFilter;
  communityInterest?: StringNullableFilter;
  communityLanguage?: StringFilter;
  communityMembers?: StringNullableFilter;
  communityName?: StringFilter;
  communityProf?: StringNullableFilter;
  communityQualification?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringFilter;
  insights?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
};
