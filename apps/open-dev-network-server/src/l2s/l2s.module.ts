import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { L2sModuleBase } from "./base/l2s.module.base";
import { L2sService } from "./l2s.service";
import { L2sController } from "./l2s.controller";
import { L2sResolver } from "./l2s.resolver";

@Module({
  imports: [L2sModuleBase, forwardRef(() => AuthModule)],
  controllers: [L2sController],
  providers: [L2sService, L2sResolver],
  exports: [L2sService],
})
export class L2sModule {}
