import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StatisticsDashboardService } from "./statisticsdashboard.service";
import { UserStatisticDto } from "../statisticsDashboard/UserStatisticDto";

@swagger.ApiTags("statisticsDashboards")
@common.Controller("statisticsDashboards")
export class StatisticsDashboardController {
  constructor(protected readonly service: StatisticsDashboardService) {}

  @common.Get("/user/statistics")
  @swagger.ApiOkResponse({
    type: UserStatisticDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserStatistics(
    @common.Body()
    body: string
  ): Promise<UserStatisticDto[]> {
        return this.service.GetUserStatistics(body);
      }
}
