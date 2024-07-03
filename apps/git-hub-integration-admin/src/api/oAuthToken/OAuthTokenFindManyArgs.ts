import { OAuthTokenWhereInput } from "./OAuthTokenWhereInput";
import { OAuthTokenOrderByInput } from "./OAuthTokenOrderByInput";

export type OAuthTokenFindManyArgs = {
  where?: OAuthTokenWhereInput;
  orderBy?: Array<OAuthTokenOrderByInput>;
  skip?: number;
  take?: number;
};
