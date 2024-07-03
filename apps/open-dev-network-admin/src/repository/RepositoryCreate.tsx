import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const RepositoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="language" source="language" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
