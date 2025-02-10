import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "@/services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gamequery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gamequery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gamequery.genre?.id,
            parent_platforms: gamequery.platform?.id,
            ordering: gamequery.sortOrder,
            search: gamequery.searchText,
          },
        })
        .then((res) => res.data.results),
  });

export default useGames;
