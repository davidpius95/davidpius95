import { Module } from "@nestjs/common";
import { StatisticsDashboardService } from "./statisticsdashboard.service";
import { StatisticsDashboardController } from "./statisticsdashboard.controller";
import { StatisticsDashboardResolver } from "./statisticsdashboard.resolver";

@Module({
  controllers: [StatisticsDashboardController],
  providers: [StatisticsDashboardService, StatisticsDashboardResolver],
  exports: [StatisticsDashboardService],
})
export class StatisticsDashboardModule {}
