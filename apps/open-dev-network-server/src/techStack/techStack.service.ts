import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TechStackServiceBase } from "./base/techStack.service.base";

@Injectable()
export class TechStackService extends TechStackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
