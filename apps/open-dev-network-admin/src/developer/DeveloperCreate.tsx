import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DeveloperCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="githubProfile" source="githubProfile" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
