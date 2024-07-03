import { Injectable } from "@nestjs/common";
import { UserStatisticDto } from "../statisticsDashboard/UserStatisticDto";

@Injectable()
export class StatisticsDashboardService {
  constructor() {}
  async GetUserStatistics(args: string): Promise<UserStatisticDto[]> {
    throw new Error("Not implemented");
  }
}
