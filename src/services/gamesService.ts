import { Game } from "@/entities/Game";
import { APIclient } from "./apiClient";

export default new APIclient<Game>("/games");
