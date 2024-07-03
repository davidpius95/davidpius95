import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TechnologyModuleBase } from "./base/technology.module.base";
import { TechnologyService } from "./technology.service";
import { TechnologyController } from "./technology.controller";
import { TechnologyResolver } from "./technology.resolver";

@Module({
  imports: [TechnologyModuleBase, forwardRef(() => AuthModule)],
  controllers: [TechnologyController],
  providers: [TechnologyService, TechnologyResolver],
  exports: [TechnologyService],
})
export class TechnologyModule {}
