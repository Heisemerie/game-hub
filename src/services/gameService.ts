import { APIclient } from "./apiClient";
import { Game } from "@/entities/Game";

export default new APIclient<Game>("/games");
