import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GitHubUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="avatarUrl" source="avatarUrl" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="profileUrl" source="profileUrl" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
