import genres from "@/data/genres";
import { APIclient, FetchResponse } from "@/services/api-client";
import Genre from "@/entities/Genre";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const genreService = new APIclient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
