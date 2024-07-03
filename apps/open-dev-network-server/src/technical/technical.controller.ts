import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TechnicalService } from "./technical.service";
import { TechnicalControllerBase } from "./base/technical.controller.base";

@swagger.ApiTags("technicals")
@common.Controller("technicals")
export class TechnicalController extends TechnicalControllerBase {
  constructor(
    protected readonly service: TechnicalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
