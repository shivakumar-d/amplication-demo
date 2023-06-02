import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

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
      </SimpleShowLayout>
    </Show>
  );
};
