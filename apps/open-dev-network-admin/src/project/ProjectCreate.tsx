import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepositoryTitle } from "../repository/RepositoryTitle";
import { TechnologyTitle } from "../technology/TechnologyTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
