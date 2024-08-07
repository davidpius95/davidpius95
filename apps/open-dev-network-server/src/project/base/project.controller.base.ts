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
import { ProjectService } from "../project.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProjectCreateInput } from "./ProjectCreateInput";
import { Project } from "./Project";
import { ProjectFindManyArgs } from "./ProjectFindManyArgs";
import { ProjectWhereUniqueInput } from "./ProjectWhereUniqueInput";
import { ProjectUpdateInput } from "./ProjectUpdateInput";
import { RepositoryFindManyArgs } from "../../repository/base/RepositoryFindManyArgs";
import { Repository } from "../../repository/base/Repository";
import { RepositoryWhereUniqueInput } from "../../repository/base/RepositoryWhereUniqueInput";
import { TechnologyFindManyArgs } from "../../technology/base/TechnologyFindManyArgs";
import { Technology } from "../../technology/base/Technology";
import { TechnologyWhereUniqueInput } from "../../technology/base/TechnologyWhereUniqueInput";
import { RepositoryDto } from "../../repository/RepositoryDto";
import { ProjectDto } from "../ProjectDto";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProjectControllerBase {
  constructor(
    protected readonly service: ProjectService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Project })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProject(
    @common.Body() data: ProjectCreateInput
  ): Promise<Project> {
    return await this.service.createProject({
      data: data,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Project] })
  @ApiNestedQuery(ProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async projects(@common.Req() request: Request): Promise<Project[]> {
    const args = plainToClass(ProjectFindManyArgs, request.query);
    return this.service.projects({
      ...args,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async project(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    const result = await this.service.project({
      where: params,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        startDate: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProject(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() data: ProjectUpdateInput
  ): Promise<Project | null> {
    try {
      return await this.service.updateProject({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Project })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProject(
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Project | null> {
    try {
      return await this.service.deleteProject({
        where: params,
        select: {
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          name: true,
          startDate: true,
          updatedAt: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/repositories")
  @ApiNestedQuery(RepositoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Repository",
    action: "read",
    possession: "any",
  })
  async findRepositories(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Repository[]> {
    const query = plainToClass(RepositoryFindManyArgs, request.query);
    const results = await this.service.findRepositories(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/repositories")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async connectRepositories(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: RepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repositories: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repositories")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updateRepositories(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: RepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repositories: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repositories")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async disconnectRepositories(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: RepositoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repositories: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/technologies")
  @ApiNestedQuery(TechnologyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Technology",
    action: "read",
    possession: "any",
  })
  async findTechnologies(
    @common.Req() request: Request,
    @common.Param() params: ProjectWhereUniqueInput
  ): Promise<Technology[]> {
    const query = plainToClass(TechnologyFindManyArgs, request.query);
    const results = await this.service.findTechnologies(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/technologies")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async connectTechnologies(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TechnologyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      technologies: {
        connect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/technologies")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async updateTechnologies(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TechnologyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      technologies: {
        set: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/technologies")
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "update",
    possession: "any",
  })
  async disconnectTechnologies(
    @common.Param() params: ProjectWhereUniqueInput,
    @common.Body() body: TechnologyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      technologies: {
        disconnect: body,
      },
    };
    await this.service.updateProject({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/projects/:id/issues")
  @swagger.ApiOkResponse({
    type: RepositoryDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CategoryIssues(
    @common.Body()
    body: string[]
  ): Promise<RepositoryDto[]> {
    return this.service.CategoryIssues(body);
  }

  @common.Get("/projects/filter")
  @swagger.ApiOkResponse({
    type: ProjectDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FilterProjects(
    @common.Body()
    body: string[]
  ): Promise<ProjectDto[]> {
    return this.service.FilterProjects(body);
  }
}
