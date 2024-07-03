import { NonTechnical as TNonTechnical } from "../api/nonTechnical/NonTechnical";

export const NONTECHNICAL_TITLE_FIELD = "id";

export const NonTechnicalTitle = (record: TNonTechnical): string => {
  return record.id?.toString() || String(record.id);
};
