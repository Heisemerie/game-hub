import platforms from "@/data/platforms";
import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
