import { SortOrder } from "../../util/SortOrder";

export type TechnologyOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
