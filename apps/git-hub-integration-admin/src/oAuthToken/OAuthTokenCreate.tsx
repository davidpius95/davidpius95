import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OAuthTokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <NumberInput step={1} label="expiresIn" source="expiresIn" />
        <TextInput label="refreshToken" source="refreshToken" />
        <TextInput label="scope" source="scope" />
      </SimpleForm>
    </Create>
  );
};
