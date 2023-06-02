import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const CommunityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="audience" source="audience" />
        <TextInput label="community_age" source="communityAge" />
        <TextInput label="community_bio" source="communityBio" />
        <TextInput label="community_interest" source="communityInterest" />
        <TextInput label="community_language" source="communityLanguage" />
        <TextInput label="community_members" source="communityMembers" />
        <TextInput label="community_name" source="communityName" />
        <TextInput label="community_prof" source="communityProf" />
        <TextInput
          label="community_qualification"
          source="communityQualification"
        />
        <TextInput label="image_url" source="imageUrl" />
        <TextInput label="insights" source="insights" />
        <BooleanInput label="is_active" source="isActive" />
      </SimpleForm>
    </Edit>
  );
};
