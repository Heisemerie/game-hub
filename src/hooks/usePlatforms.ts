import platforms from "@/data/platforms";
import platformService, { Platform } from "@/services/platformService";
import { useQuery } from "@tanstack/react-query";

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms,
  });

export default usePlatforms;
