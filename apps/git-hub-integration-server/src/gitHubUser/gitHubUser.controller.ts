import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GitHubUserService } from "./gitHubUser.service";
import { GitHubUserControllerBase } from "./base/gitHubUser.controller.base";

@swagger.ApiTags("gitHubUsers")
@common.Controller("gitHubUsers")
export class GitHubUserController extends GitHubUserControllerBase {
  constructor(protected readonly service: GitHubUserService) {
    super(service);
  }
}
