import { Injectable } from "@nestjs/common";
import { UserActivityDto } from "../userDashboard/UserActivityDto";
import { UserPreferenceDto } from "../userDashboard/UserPreferenceDto";

@Injectable()
export class UserDashboardService {
  constructor() {}
  async GetUserActivities(args: string): Promise<UserActivityDto[]> {
    throw new Error("Not implemented");
  }
  async GetUserPreferences(args: string): Promise<UserPreferenceDto[]> {
    throw new Error("Not implemented");
  }
}
