import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserStatisticModuleBase } from "./base/userStatistic.module.base";
import { UserStatisticService } from "./userStatistic.service";
import { UserStatisticController } from "./userStatistic.controller";
import { UserStatisticResolver } from "./userStatistic.resolver";

@Module({
  imports: [UserStatisticModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserStatisticController],
  providers: [UserStatisticService, UserStatisticResolver],
  exports: [UserStatisticService],
})
export class UserStatisticModule {}
