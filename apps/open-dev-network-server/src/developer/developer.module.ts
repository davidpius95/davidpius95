import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeveloperModuleBase } from "./base/developer.module.base";
import { DeveloperService } from "./developer.service";
import { DeveloperController } from "./developer.controller";
import { DeveloperResolver } from "./developer.resolver";

@Module({
  imports: [DeveloperModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeveloperController],
  providers: [DeveloperService, DeveloperResolver],
  exports: [DeveloperService],
})
export class DeveloperModule {}
