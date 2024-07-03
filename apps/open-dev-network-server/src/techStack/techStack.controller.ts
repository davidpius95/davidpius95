import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TechStackService } from "./techStack.service";
import { TechStackControllerBase } from "./base/techStack.controller.base";

@swagger.ApiTags("techStacks")
@common.Controller("techStacks")
export class TechStackController extends TechStackControllerBase {
  constructor(
    protected readonly service: TechStackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
