import Screenshot from "@/entities/Screenshot";
import { APIclient } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const screenshotService = new APIclient<Screenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: screenshotService.getAll,
  });
};

export default useScreenshots;
