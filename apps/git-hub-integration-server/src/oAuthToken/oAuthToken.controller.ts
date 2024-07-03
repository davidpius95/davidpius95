import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OAuthTokenService } from "./oAuthToken.service";
import { OAuthTokenControllerBase } from "./base/oAuthToken.controller.base";

@swagger.ApiTags("oAuthTokens")
@common.Controller("oAuthTokens")
export class OAuthTokenController extends OAuthTokenControllerBase {
  constructor(protected readonly service: OAuthTokenService) {
    super(service);
  }
}
