import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserDashboardService } from "./userdashboard.service";
import { UserActivityDto } from "../userDashboard/UserActivityDto";
import { UserPreferenceDto } from "../userDashboard/UserPreferenceDto";

@swagger.ApiTags("userDashboards")
@common.Controller("userDashboards")
export class UserDashboardController {
  constructor(protected readonly service: UserDashboardService) {}

  @common.Get("/user/activities")
  @swagger.ApiOkResponse({
    type: UserActivityDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserActivities(
    @common.Body()
    body: string
  ): Promise<UserActivityDto[]> {
        return this.service.GetUserActivities(body);
      }

  @common.Get("/user/preferences")
  @swagger.ApiOkResponse({
    type: UserPreferenceDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserPreferences(
    @common.Body()
    body: string
  ): Promise<UserPreferenceDto[]> {
        return this.service.GetUserPreferences(body);
      }
}
