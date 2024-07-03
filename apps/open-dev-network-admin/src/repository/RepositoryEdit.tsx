import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectTitle } from "../project/ProjectTitle";

export const RepositoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="language" source="language" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
