import { L2sWhereInput } from "./L2sWhereInput";
import { L2sOrderByInput } from "./L2sOrderByInput";

export type L2sFindManyArgs = {
  where?: L2sWhereInput;
  orderBy?: Array<L2sOrderByInput>;
  skip?: number;
  take?: number;
};
