import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OAuthTokenWhereInput = {
  accessToken?: StringNullableFilter;
  expiresIn?: IntNullableFilter;
  id?: StringFilter;
  refreshToken?: StringNullableFilter;
  scope?: StringNullableFilter;
};
