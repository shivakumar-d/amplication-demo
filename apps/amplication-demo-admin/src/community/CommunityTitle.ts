import { Community as TCommunity } from "../api/community/Community";

export const COMMUNITY_TITLE_FIELD = "communityName";

export const CommunityTitle = (record: TCommunity): string => {
  return record.communityName || String(record.id);
};
