import { GitHubUserWhereInput } from "./GitHubUserWhereInput";
import { GitHubUserOrderByInput } from "./GitHubUserOrderByInput";

export type GitHubUserFindManyArgs = {
  where?: GitHubUserWhereInput;
  orderBy?: Array<GitHubUserOrderByInput>;
  skip?: number;
  take?: number;
};
