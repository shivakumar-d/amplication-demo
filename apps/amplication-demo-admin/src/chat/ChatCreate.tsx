import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommunityTitle } from "../community/CommunityTitle";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chat_name" source="chatName" />
        <ReferenceInput
          source="communityId.id"
          reference="Community"
          label="community_id"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
