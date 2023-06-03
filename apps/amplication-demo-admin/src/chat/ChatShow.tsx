import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CHAT_TITLE_FIELD } from "./ChatTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const ChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Message"
          target="ChatId"
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
