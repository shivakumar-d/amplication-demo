import { Chat } from "../chat/Chat";

export type Community = {
  audience: string | null;
  chats?: Array<Chat>;
  communityAge: string | null;
  communityBio: string | null;
  communityInterest: string | null;
  communityLanguage: string;
  communityMembers: string | null;
  communityName: string;
  communityProf: string | null;
  communityQualification: string | null;
  createdAt: Date;
  id: string;
  imageUrl: string;
  insights: string | null;
  isActive: boolean | null;
  updatedAt: Date;
};
