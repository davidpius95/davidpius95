import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GitHubUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="avatarUrl" source="avatarUrl" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="profileUrl" source="profileUrl" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
