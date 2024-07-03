import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RepositoryListRelationFilter } from "../repository/RepositoryListRelationFilter";
import { TechnologyListRelationFilter } from "../technology/TechnologyListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  repositories?: RepositoryListRelationFilter;
  startDate?: DateTimeNullableFilter;
  technologies?: TechnologyListRelationFilter;
};
