import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TechnologyService } from "./technology.service";
import { TechnologyControllerBase } from "./base/technology.controller.base";

@swagger.ApiTags("technologies")
@common.Controller("technologies")
export class TechnologyController extends TechnologyControllerBase {
  constructor(
    protected readonly service: TechnologyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
