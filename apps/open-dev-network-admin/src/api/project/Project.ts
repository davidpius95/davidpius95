import { Repository } from "../repository/Repository";
import { Technology } from "../technology/Technology";

export type Project = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  repositories?: Array<Repository>;
  startDate: Date | null;
  technologies?: Array<Technology>;
  updatedAt: Date;
};
