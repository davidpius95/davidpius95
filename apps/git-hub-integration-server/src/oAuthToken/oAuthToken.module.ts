import { Module } from "@nestjs/common";
import { OAuthTokenModuleBase } from "./base/oAuthToken.module.base";
import { OAuthTokenService } from "./oAuthToken.service";
import { OAuthTokenController } from "./oAuthToken.controller";
import { OAuthTokenResolver } from "./oAuthToken.resolver";

@Module({
  imports: [OAuthTokenModuleBase],
  controllers: [OAuthTokenController],
  providers: [OAuthTokenService, OAuthTokenResolver],
  exports: [OAuthTokenService],
})
export class OAuthTokenModule {}
