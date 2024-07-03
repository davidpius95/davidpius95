import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TechnologyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  version?: StringNullableFilter;
};
