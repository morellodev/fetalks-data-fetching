import wretch from "wretch";

export const jsonServerApi = wretch().url(
  process.env.NEXT_PUBLIC_JSON_SERVER_URL
);
