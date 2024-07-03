import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IssueModuleBase } from "./base/issue.module.base";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";
import { IssueResolver } from "./issue.resolver";

@Module({
  imports: [IssueModuleBase, forwardRef(() => AuthModule)],
  controllers: [IssueController],
  providers: [IssueService, IssueResolver],
  exports: [IssueService],
})
export class IssueModule {}
