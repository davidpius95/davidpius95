export type OAuthTokenUpdateInput = {
  accessToken?: string | null;
  expiresIn?: number | null;
  refreshToken?: string | null;
  scope?: string | null;
};
