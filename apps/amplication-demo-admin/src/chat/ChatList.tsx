import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";

export const ChatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"chats"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
