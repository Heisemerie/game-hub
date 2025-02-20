import { Genre } from "@/entities/Genre";
import { APIclient } from "./apiClient";

export default new APIclient<Genre>("/genres");
