import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TechnicalModuleBase } from "./base/technical.module.base";
import { TechnicalService } from "./technical.service";
import { TechnicalController } from "./technical.controller";
import { TechnicalResolver } from "./technical.resolver";

@Module({
  imports: [TechnicalModuleBase, forwardRef(() => AuthModule)],
  controllers: [TechnicalController],
  providers: [TechnicalService, TechnicalResolver],
  exports: [TechnicalService],
})
export class TechnicalModule {}
