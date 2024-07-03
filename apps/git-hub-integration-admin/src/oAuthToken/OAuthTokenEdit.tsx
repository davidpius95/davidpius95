import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OAuthTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <NumberInput step={1} label="expiresIn" source="expiresIn" />
        <TextInput label="refreshToken" source="refreshToken" />
        <TextInput label="scope" source="scope" />
      </SimpleForm>
    </Edit>
  );
};
