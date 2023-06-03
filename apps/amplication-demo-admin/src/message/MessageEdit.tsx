import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";
import { MessageTitle } from "./MessageTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="agent_idtype" source="agentIdtype" />
        <ReferenceInput source="chatId.id" reference="Chat" label="chat_id">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <BooleanInput label="is_poll" source="isPoll" />
        <ReferenceInput source="message.id" reference="Message" label="message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="quesions" source="quesions" />
        <TextInput label="user_id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
