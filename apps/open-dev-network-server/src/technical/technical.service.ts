import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TechnicalServiceBase } from "./base/technical.service.base";

@Injectable()
export class TechnicalService extends TechnicalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
