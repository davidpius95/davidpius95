import { Technical as TTechnical } from "../api/technical/Technical";

export const TECHNICAL_TITLE_FIELD = "id";

export const TechnicalTitle = (record: TTechnical): string => {
  return record.id?.toString() || String(record.id);
};
