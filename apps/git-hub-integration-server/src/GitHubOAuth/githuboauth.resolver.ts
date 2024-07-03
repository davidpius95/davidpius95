import * as graphql from "@nestjs/graphql";
import { GitHubOAuthService } from "./githuboauth.service";

export class GitHubOAuthResolver {
  constructor(protected readonly service: GitHubOAuthService) {}

  @graphql.Query(() => String)
  async FetchGitHubComments(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchGitHubComments(args);
  }

  @graphql.Mutation(() => String)
  async HandleGitHubOAuthCallback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HandleGitHubOAuthCallback(args);
  }

  @graphql.Mutation(() => String)
  async InitiateGitHubOAuth(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.InitiateGitHubOAuth(args);
  }

  @graphql.Mutation(() => String)
  async PostGitHubComment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PostGitHubComment(args);
  }
}
