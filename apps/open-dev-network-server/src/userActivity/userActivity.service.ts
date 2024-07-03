import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserActivityServiceBase } from "./base/userActivity.service.base";

@Injectable()
export class UserActivityService extends UserActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
