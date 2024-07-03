import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeveloperWhereInput = {
  email?: StringNullableFilter;
  githubProfile?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
