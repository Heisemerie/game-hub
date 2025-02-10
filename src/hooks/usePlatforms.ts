import platforms from "@/data/platforms";
import { FetchResponse } from "@/services/apiClient";
import platformService, { Platform } from "@/services/platformService";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {count: platforms.length, next: null, results: platforms},
  });

export default usePlatforms;
