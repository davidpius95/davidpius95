import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TechStackModuleBase } from "./base/techStack.module.base";
import { TechStackService } from "./techStack.service";
import { TechStackController } from "./techStack.controller";
import { TechStackResolver } from "./techStack.resolver";

@Module({
  imports: [TechStackModuleBase, forwardRef(() => AuthModule)],
  controllers: [TechStackController],
  providers: [TechStackService, TechStackResolver],
  exports: [TechStackService],
})
export class TechStackModule {}
