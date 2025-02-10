import genres from "@/data/genres";
import { FetchResponse } from "@/services/apiClient";
import genreService, { Genre } from "@/services/genreService";
import { useQuery } from "@tanstack/react-query";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: {count: genres.length, next: null, results: genres},
  });

export default useGenres;
