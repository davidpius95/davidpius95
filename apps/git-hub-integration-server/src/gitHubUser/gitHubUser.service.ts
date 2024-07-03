import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitHubUserServiceBase } from "./base/gitHubUser.service.base";

@Injectable()
export class GitHubUserService extends GitHubUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
