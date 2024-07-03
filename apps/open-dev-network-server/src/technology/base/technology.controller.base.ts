/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TechnologyService } from "../technology.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TechnologyCreateInput } from "./TechnologyCreateInput";
import { Technology } from "./Technology";
import { TechnologyFindManyArgs } from "./TechnologyFindManyArgs";
import { TechnologyWhereUniqueInput } from "./TechnologyWhereUniqueInput";
import { TechnologyUpdateInput } from "./TechnologyUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TechnologyControllerBase {
  constructor(
    protected readonly service: TechnologyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Technology })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TechnologyCreateInput,
  })
  async createTechnology(
    @common.Body() data: TechnologyCreateInput
  ): Promise<Technology> {
    return await this.service.createTechnology({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Technology] })
  @ApiNestedQuery(TechnologyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technologies(@common.Req() request: Request): Promise<Technology[]> {
    const args = plainToClass(TechnologyFindManyArgs, request.query);
    return this.service.technologies({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async technology(
    @common.Param() params: TechnologyWhereUniqueInput
  ): Promise<Technology | null> {
    const result = await this.service.technology({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TechnologyUpdateInput,
  })
  async updateTechnology(
    @common.Param() params: TechnologyWhereUniqueInput,
    @common.Body() data: TechnologyUpdateInput
  ): Promise<Technology | null> {
    try {
      return await this.service.updateTechnology({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Technology })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTechnology(
    @common.Param() params: TechnologyWhereUniqueInput
  ): Promise<Technology | null> {
    try {
      return await this.service.deleteTechnology({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
