import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const CommunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="audience" source="audience" />
        <ReferenceArrayInput
          source="chats"
          reference="Chat"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
