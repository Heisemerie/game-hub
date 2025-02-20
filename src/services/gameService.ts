import { APIclient } from "./apiClient";
import { Game } from "./gamesService";

export default new APIclient<Game>("/games");
