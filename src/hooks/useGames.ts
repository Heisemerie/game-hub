import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/apiClient";
import gameService, { Game } from "@/services/gameService";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = (gamequery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gamequery.genre?.id,
          parent_platforms: gamequery.platform?.id,
          ordering: gamequery.sortOrder,
          search: gamequery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
