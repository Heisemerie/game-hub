import genres from "@/data/genres";
import { FetchResponse } from "@/services/apiClient";
import genreService, { Genre } from "@/services/genreService";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
