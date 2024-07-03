import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NonTechnicalModuleBase } from "./base/nonTechnical.module.base";
import { NonTechnicalService } from "./nonTechnical.service";
import { NonTechnicalController } from "./nonTechnical.controller";
import { NonTechnicalResolver } from "./nonTechnical.resolver";

@Module({
  imports: [NonTechnicalModuleBase, forwardRef(() => AuthModule)],
  controllers: [NonTechnicalController],
  providers: [NonTechnicalService, NonTechnicalResolver],
  exports: [NonTechnicalService],
})
export class NonTechnicalModule {}
