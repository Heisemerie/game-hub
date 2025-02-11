import platforms from "@/data/platforms";
import { FetchResponse } from "@/services/apiClient";
import platformService, { Platform } from "@/services/platformService";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
