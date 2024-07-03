import { Project } from "../project/Project";

export type Technology = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  project?: Project | null;
  updatedAt: Date;
  version: string | null;
};
