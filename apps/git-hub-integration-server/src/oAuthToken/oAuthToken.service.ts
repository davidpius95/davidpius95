import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OAuthTokenServiceBase } from "./base/oAuthToken.service.base";

@Injectable()
export class OAuthTokenService extends OAuthTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
