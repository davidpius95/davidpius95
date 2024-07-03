import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { L2sServiceBase } from "./base/l2s.service.base";

@Injectable()
export class L2sService extends L2sServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
