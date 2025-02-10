import genres from "@/data/genres";
import apiClient, { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data.results),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: genres,
  });

export default useGenres;
