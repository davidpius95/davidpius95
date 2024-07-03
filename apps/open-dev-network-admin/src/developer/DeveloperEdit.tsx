import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DeveloperEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="githubProfile" source="githubProfile" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
