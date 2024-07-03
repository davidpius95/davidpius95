import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NonTechnicalResolverBase } from "./base/nonTechnical.resolver.base";
import { NonTechnical } from "./base/NonTechnical";
import { NonTechnicalService } from "./nonTechnical.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NonTechnical)
export class NonTechnicalResolver extends NonTechnicalResolverBase {
  constructor(
    protected readonly service: NonTechnicalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
