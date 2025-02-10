import genres from "@/data/genres";
import genreService, { Genre } from "@/services/genreService";
import { useQuery } from "@tanstack/react-query";

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,
  });

export default useGenres;
