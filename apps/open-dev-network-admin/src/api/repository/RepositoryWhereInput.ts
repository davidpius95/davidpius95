import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type RepositoryWhereInput = {
  id?: StringFilter;
  language?: StringNullableFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  url?: StringNullableFilter;
};
