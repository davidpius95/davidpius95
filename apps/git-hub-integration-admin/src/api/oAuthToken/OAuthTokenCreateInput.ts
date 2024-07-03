export type OAuthTokenCreateInput = {
  accessToken?: string | null;
  expiresIn?: number | null;
  refreshToken?: string | null;
  scope?: string | null;
};
