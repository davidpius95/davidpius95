import { RepositoryCreateNestedManyWithoutProjectsInput } from "./RepositoryCreateNestedManyWithoutProjectsInput";
import { TechnologyCreateNestedManyWithoutProjectsInput } from "./TechnologyCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  repositories?: RepositoryCreateNestedManyWithoutProjectsInput;
  startDate?: Date | null;
  technologies?: TechnologyCreateNestedManyWithoutProjectsInput;
};
