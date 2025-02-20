import { Platform } from "@/entities/Platform";
import { APIclient } from "./apiClient";

export default new APIclient<Platform>("/platforms/lists/parents");
