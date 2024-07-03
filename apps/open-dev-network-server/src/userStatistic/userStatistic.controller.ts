import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserStatisticService } from "./userStatistic.service";
import { UserStatisticControllerBase } from "./base/userStatistic.controller.base";

@swagger.ApiTags("userStatistics")
@common.Controller("userStatistics")
export class UserStatisticController extends UserStatisticControllerBase {
  constructor(
    protected readonly service: UserStatisticService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
