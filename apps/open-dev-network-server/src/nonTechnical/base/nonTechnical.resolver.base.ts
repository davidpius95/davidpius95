/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NonTechnical } from "./NonTechnical";
import { NonTechnicalCountArgs } from "./NonTechnicalCountArgs";
import { NonTechnicalFindManyArgs } from "./NonTechnicalFindManyArgs";
import { NonTechnicalFindUniqueArgs } from "./NonTechnicalFindUniqueArgs";
import { DeleteNonTechnicalArgs } from "./DeleteNonTechnicalArgs";
import { NonTechnicalService } from "../nonTechnical.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NonTechnical)
export class NonTechnicalResolverBase {
  constructor(
    protected readonly service: NonTechnicalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NonTechnical",
    action: "read",
    possession: "any",
  })
  async _nonTechnicalsMeta(
    @graphql.Args() args: NonTechnicalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NonTechnical])
  @nestAccessControl.UseRoles({
    resource: "NonTechnical",
    action: "read",
    possession: "any",
  })
  async nonTechnicals(
    @graphql.Args() args: NonTechnicalFindManyArgs
  ): Promise<NonTechnical[]> {
    return this.service.nonTechnicals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NonTechnical, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NonTechnical",
    action: "read",
    possession: "own",
  })
  async nonTechnical(
    @graphql.Args() args: NonTechnicalFindUniqueArgs
  ): Promise<NonTechnical | null> {
    const result = await this.service.nonTechnical(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NonTechnical)
  @nestAccessControl.UseRoles({
    resource: "NonTechnical",
    action: "delete",
    possession: "any",
  })
  async deleteNonTechnical(
    @graphql.Args() args: DeleteNonTechnicalArgs
  ): Promise<NonTechnical | null> {
    try {
      return await this.service.deleteNonTechnical(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
