import platforms from "@/data/platforms";
import { APIclient, FetchResponse } from "@/services/apiClient";
import { Platform } from "@/entities/Platform";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const platformService = new APIclient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
