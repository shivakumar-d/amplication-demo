import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMUNITY_TITLE_FIELD } from "./CommunityTitle";

export const CommunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="audience" source="audience" />
        <TextField label="community_age" source="communityAge" />
        <TextField label="community_bio" source="communityBio" />
        <TextField label="community_interest" source="communityInterest" />
        <TextField label="community_language" source="communityLanguage" />
        <TextField label="community_members" source="communityMembers" />
        <TextField label="community_name" source="communityName" />
        <TextField label="community_prof" source="communityProf" />
        <TextField
          label="community_qualification"
          source="communityQualification"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="image_url" source="imageUrl" />
        <TextField label="insights" source="insights" />
        <BooleanField label="is_active" source="isActive" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Chat" target="CommunityId" label="chats">
          <Datagrid rowClick="show">
            <TextField label="chat_name" source="chatName" />
            <ReferenceField
              label="community_id"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="messages" source="messages" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
