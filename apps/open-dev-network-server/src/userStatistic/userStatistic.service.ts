import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserStatisticServiceBase } from "./base/userStatistic.service.base";

@Injectable()
export class UserStatisticService extends UserStatisticServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
