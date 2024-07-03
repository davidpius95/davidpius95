import { SortOrder } from "../../util/SortOrder";

export type OAuthTokenOrderByInput = {
  accessToken?: SortOrder;
  createdAt?: SortOrder;
  expiresIn?: SortOrder;
  id?: SortOrder;
  refreshToken?: SortOrder;
  scope?: SortOrder;
  updatedAt?: SortOrder;
};
