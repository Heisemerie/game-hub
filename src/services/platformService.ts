import { APIclient } from "./apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIclient<Platform>("/platforms/lists/parents");
