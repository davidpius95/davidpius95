import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserStatisticResolverBase } from "./base/userStatistic.resolver.base";
import { UserStatistic } from "./base/UserStatistic";
import { UserStatisticService } from "./userStatistic.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserStatistic)
export class UserStatisticResolver extends UserStatisticResolverBase {
  constructor(
    protected readonly service: UserStatisticService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
