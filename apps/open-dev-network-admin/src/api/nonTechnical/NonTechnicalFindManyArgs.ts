import { NonTechnicalWhereInput } from "./NonTechnicalWhereInput";
import { NonTechnicalOrderByInput } from "./NonTechnicalOrderByInput";

export type NonTechnicalFindManyArgs = {
  where?: NonTechnicalWhereInput;
  orderBy?: Array<NonTechnicalOrderByInput>;
  skip?: number;
  take?: number;
};
