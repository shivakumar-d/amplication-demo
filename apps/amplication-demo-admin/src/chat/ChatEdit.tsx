import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CommunityTitle } from "../community/CommunityTitle";

export const ChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
