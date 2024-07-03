import { RepositoryUpdateManyWithoutProjectsInput } from "./RepositoryUpdateManyWithoutProjectsInput";
import { TechnologyUpdateManyWithoutProjectsInput } from "./TechnologyUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  repositories?: RepositoryUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
  technologies?: TechnologyUpdateManyWithoutProjectsInput;
};
