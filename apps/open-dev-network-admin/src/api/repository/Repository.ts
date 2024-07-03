import { Project } from "../project/Project";

export type Repository = {
  createdAt: Date;
  id: string;
  language: string | null;
  name: string | null;
  project?: Project | null;
  updatedAt: Date;
  url: string | null;
};
