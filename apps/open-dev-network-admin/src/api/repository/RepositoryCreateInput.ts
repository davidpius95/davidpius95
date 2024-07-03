import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type RepositoryCreateInput = {
  language?: string | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  url?: string | null;
};
