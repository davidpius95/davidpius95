import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GitHubOAuthService } from "./githuboauth.service";

@swagger.ApiTags("gitHubOAuths")
@common.Controller("gitHubOAuths")
export class GitHubOAuthController {
  constructor(protected readonly service: GitHubOAuthService) {}

  @common.Get("/github/comments")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchGitHubComments(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchGitHubComments(body);
      }

  @common.Get("/github/oauth/callback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleGitHubOAuthCallback(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HandleGitHubOAuthCallback(body);
      }

  @common.Get("/github/oauth/initiate")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateGitHubOAuth(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.InitiateGitHubOAuth(body);
      }

  @common.Post("/github/comments")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PostGitHubComment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PostGitHubComment(body);
      }
}
