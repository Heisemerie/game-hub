import Trailer from "@/entities/Trailer";
import { APIclient } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (gameId: number) => {
  const trailerService = new APIclient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: trailerService.getAll,
  });
};

export default useTrailers;
