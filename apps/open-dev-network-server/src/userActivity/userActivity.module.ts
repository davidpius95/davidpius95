import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserActivityModuleBase } from "./base/userActivity.module.base";
import { UserActivityService } from "./userActivity.service";
import { UserActivityController } from "./userActivity.controller";
import { UserActivityResolver } from "./userActivity.resolver";

@Module({
  imports: [UserActivityModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserActivityController],
  providers: [UserActivityService, UserActivityResolver],
  exports: [UserActivityService],
})
export class UserActivityModule {}
