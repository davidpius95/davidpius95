import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TechnologyCreateInput = {
  description?: string | null;
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  version?: string | null;
};
