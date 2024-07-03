import * as graphql from "@nestjs/graphql";
import { UserStatisticDto } from "../statisticsDashboard/UserStatisticDto";
import { StatisticsDashboardService } from "./statisticsdashboard.service";

export class StatisticsDashboardResolver {
  constructor(protected readonly service: StatisticsDashboardService) {}

  @graphql.Query(() => [UserStatisticDto])
  async GetUserStatistics(
    @graphql.Args()
    args: string
  ): Promise<UserStatisticDto[]> {
    return this.service.GetUserStatistics(args);
  }
}
