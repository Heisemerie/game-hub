import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/apiClient";
import gameService, { Game } from "@/services/gameService";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

const useGames = (gamequery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gamequery.genreId,
          parent_platforms: gamequery.platformId,
          ordering: gamequery.sortOrder,
          search: gamequery.searchText,
          page: pageParam,
          page_size: 12,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
