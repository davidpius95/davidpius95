import { Injectable } from "@nestjs/common";

@Injectable()
export class GitHubOAuthService {
  constructor() {}
  async FetchGitHubComments(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async HandleGitHubOAuthCallback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InitiateGitHubOAuth(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PostGitHubComment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
