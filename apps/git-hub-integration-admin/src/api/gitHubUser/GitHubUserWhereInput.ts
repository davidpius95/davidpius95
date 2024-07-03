import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GitHubUserWhereInput = {
  avatarUrl?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  profileUrl?: StringNullableFilter;
  username?: StringNullableFilter;
};
