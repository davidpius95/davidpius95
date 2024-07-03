import { Module } from "@nestjs/common";
import { GitHubOAuthService } from "./githuboauth.service";
import { GitHubOAuthController } from "./githuboauth.controller";
import { GitHubOAuthResolver } from "./githuboauth.resolver";

@Module({
  controllers: [GitHubOAuthController],
  providers: [GitHubOAuthService, GitHubOAuthResolver],
  exports: [GitHubOAuthService],
})
export class GitHubOAuthModule {}
