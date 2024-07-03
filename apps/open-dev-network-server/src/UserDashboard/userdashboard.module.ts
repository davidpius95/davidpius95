import { Module } from "@nestjs/common";
import { UserDashboardService } from "./userdashboard.service";
import { UserDashboardController } from "./userdashboard.controller";
import { UserDashboardResolver } from "./userdashboard.resolver";

@Module({
  controllers: [UserDashboardController],
  providers: [UserDashboardService, UserDashboardResolver],
  exports: [UserDashboardService],
})
export class UserDashboardModule {}
