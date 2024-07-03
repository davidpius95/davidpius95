import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepositoryTitle } from "../repository/RepositoryTitle";
import { TechnologyTitle } from "../technology/TechnologyTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="repositories"
          reference="Repository"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepositoryTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceArrayInput
          source="technologies"
          reference="Technology"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TechnologyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
