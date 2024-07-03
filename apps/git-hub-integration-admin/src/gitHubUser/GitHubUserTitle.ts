import { GitHubUser as TGitHubUser } from "../api/gitHubUser/GitHubUser";

export const GITHUBUSER_TITLE_FIELD = "username";

export const GitHubUserTitle = (record: TGitHubUser): string => {
  return record.username?.toString() || String(record.id);
};
