import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NonTechnicalServiceBase } from "./base/nonTechnical.service.base";

@Injectable()
export class NonTechnicalService extends NonTechnicalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
