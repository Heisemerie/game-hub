import { APIclient } from "./apiClient";
import { Platform } from "./platformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default new APIclient<Game>("/games");