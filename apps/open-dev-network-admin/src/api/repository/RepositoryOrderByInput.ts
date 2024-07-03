import { SortOrder } from "../../util/SortOrder";

export type RepositoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
