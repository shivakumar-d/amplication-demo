import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommunityTitle } from "../community/CommunityTitle";
import { MessageTitle } from "../message/MessageTitle";

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
        <ReferenceArrayInput
          source="message"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
