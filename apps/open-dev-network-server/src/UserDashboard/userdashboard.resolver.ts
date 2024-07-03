import * as graphql from "@nestjs/graphql";
import { UserActivityDto } from "../userDashboard/UserActivityDto";
import { UserPreferenceDto } from "../userDashboard/UserPreferenceDto";
import { UserDashboardService } from "./userdashboard.service";

export class UserDashboardResolver {
  constructor(protected readonly service: UserDashboardService) {}

  @graphql.Query(() => [UserActivityDto])
  async GetUserActivities(
    @graphql.Args()
    args: string
  ): Promise<UserActivityDto[]> {
    return this.service.GetUserActivities(args);
  }

  @graphql.Query(() => [UserPreferenceDto])
  async GetUserPreferences(
    @graphql.Args()
    args: string
  ): Promise<UserPreferenceDto[]> {
    return this.service.GetUserPreferences(args);
  }
}
