import * as graphql from "@nestjs/graphql";
import { GitHubUserResolverBase } from "./base/gitHubUser.resolver.base";
import { GitHubUser } from "./base/GitHubUser";
import { GitHubUserService } from "./gitHubUser.service";

@graphql.Resolver(() => GitHubUser)
export class GitHubUserResolver extends GitHubUserResolverBase {
  constructor(protected readonly service: GitHubUserService) {
    super(service);
  }
}
