import { OAuthToken as TOAuthToken } from "../api/oAuthToken/OAuthToken";

export const OAUTHTOKEN_TITLE_FIELD = "accessToken";

export const OAuthTokenTitle = (record: TOAuthToken): string => {
  return record.accessToken?.toString() || String(record.id);
};
