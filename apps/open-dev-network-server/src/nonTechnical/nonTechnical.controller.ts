import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NonTechnicalService } from "./nonTechnical.service";
import { NonTechnicalControllerBase } from "./base/nonTechnical.controller.base";

@swagger.ApiTags("nonTechnicals")
@common.Controller("nonTechnicals")
export class NonTechnicalController extends NonTechnicalControllerBase {
  constructor(
    protected readonly service: NonTechnicalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
