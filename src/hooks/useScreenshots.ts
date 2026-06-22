import Screenshot from "@/entities/Screenshot";
import { ApiClient } from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const screenshotService = new ApiClient<Screenshot>(
    `/games/${gameId}/screenshots`,
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
  });
};

export default useScreenshots;
