import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { L2sService } from "./l2s.service";
import { L2sControllerBase } from "./base/l2s.controller.base";

@swagger.ApiTags("l2s")
@common.Controller("l2s")
export class L2sController extends L2sControllerBase {
  constructor(
    protected readonly service: L2sService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
