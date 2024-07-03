import * as graphql from "@nestjs/graphql";
import { OAuthTokenResolverBase } from "./base/oAuthToken.resolver.base";
import { OAuthToken } from "./base/OAuthToken";
import { OAuthTokenService } from "./oAuthToken.service";

@graphql.Resolver(() => OAuthToken)
export class OAuthTokenResolver extends OAuthTokenResolverBase {
  constructor(protected readonly service: OAuthTokenService) {
    super(service);
  }
}
