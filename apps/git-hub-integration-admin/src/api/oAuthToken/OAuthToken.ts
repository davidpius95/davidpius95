export type OAuthToken = {
  accessToken: string | null;
  createdAt: Date;
  expiresIn: number | null;
  id: string;
  refreshToken: string | null;
  scope: string | null;
  updatedAt: Date;
};
