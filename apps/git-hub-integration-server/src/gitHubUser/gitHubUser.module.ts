import { Module } from "@nestjs/common";
import { GitHubUserModuleBase } from "./base/gitHubUser.module.base";
import { GitHubUserService } from "./gitHubUser.service";
import { GitHubUserController } from "./gitHubUser.controller";
import { GitHubUserResolver } from "./gitHubUser.resolver";

@Module({
  imports: [GitHubUserModuleBase],
  controllers: [GitHubUserController],
  providers: [GitHubUserService, GitHubUserResolver],
  exports: [GitHubUserService],
})
export class GitHubUserModule {}
