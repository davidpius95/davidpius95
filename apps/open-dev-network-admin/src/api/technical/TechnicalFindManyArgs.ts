import { TechnicalWhereInput } from "./TechnicalWhereInput";
import { TechnicalOrderByInput } from "./TechnicalOrderByInput";

export type TechnicalFindManyArgs = {
  where?: TechnicalWhereInput;
  orderBy?: Array<TechnicalOrderByInput>;
  skip?: number;
  take?: number;
};
