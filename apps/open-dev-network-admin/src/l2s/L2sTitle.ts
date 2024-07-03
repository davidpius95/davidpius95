import { L2s as TL2s } from "../api/l2s/L2s";

export const L2S_TITLE_FIELD = "id";

export const L2sTitle = (record: TL2s): string => {
  return record.id?.toString() || String(record.id);
};
