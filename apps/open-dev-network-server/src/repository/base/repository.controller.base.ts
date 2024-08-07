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
import { RepositoryService } from "../repository.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RepositoryCreateInput } from "./RepositoryCreateInput";
import { Repository } from "./Repository";
import { RepositoryFindManyArgs } from "./RepositoryFindManyArgs";
import { RepositoryWhereUniqueInput } from "./RepositoryWhereUniqueInput";
import { RepositoryUpdateInput } from "./RepositoryUpdateInput";
import { RepositoryDto } from "../RepositoryDto";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RepositoryControllerBase {
  constructor(
    protected readonly service: RepositoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Repository })
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRepository(
    @common.Body() data: RepositoryCreateInput
  ): Promise<Repository> {
    return await this.service.createRepository({
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
        id: true,
        language: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Repository] })
  @ApiNestedQuery(RepositoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repositories(@common.Req() request: Request): Promise<Repository[]> {
    const args = plainToClass(RepositoryFindManyArgs, request.query);
    return this.service.repositories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        language: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    const result = await this.service.repository({
      where: params,
      select: {
        createdAt: true,
        id: true,
        language: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRepository(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() data: RepositoryUpdateInput
  ): Promise<Repository | null> {
    try {
      return await this.service.updateRepository({
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
          id: true,
          language: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRepository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    try {
      return await this.service.deleteRepository({
        where: params,
        select: {
          createdAt: true,
          id: true,
          language: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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

  @common.Get("/issues/:id")
  @swagger.ApiOkResponse({
    type: RepositoryDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ViewIssue(
    @common.Body()
    body: string
  ): Promise<RepositoryDto> {
    return this.service.ViewIssue(body);
  }
}
