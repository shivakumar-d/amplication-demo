import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHAT_TITLE_FIELD } from "../chat/ChatTitle";
import { MESSAGE_TITLE_FIELD } from "./MessageTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="agent_idtype" source="agentIdtype" />
        <ReferenceField label="chat_id" source="chat.id" reference="Chat">
          <TextField source={CHAT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_poll" source="isPoll" />
        <ReferenceField label="message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="options" source="options" />
        <TextField label="quesions" source="quesions" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
        <ReferenceManyField
          reference="Message"
          target="MessageId"
          label="messages"
        >
          <Datagrid rowClick="show">
            <TextField label="agent_idtype" source="agentIdtype" />
            <ReferenceField label="chat_id" source="chat.id" reference="Chat">
              <TextField source={CHAT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="is_poll" source="isPoll" />
            <ReferenceField
              label="message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="options" source="options" />
            <TextField label="quesions" source="quesions" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="user_id" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
