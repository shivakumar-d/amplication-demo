import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CommunityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"communities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
