import { GameQuery } from "@/App";
import gameService, { Game } from "@/services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGames = (gamequery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gamequery],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gamequery.genre?.id,
          parent_platforms: gamequery.platform?.id,
          ordering: gamequery.sortOrder,
          search: gamequery.searchText,
        },
      }),
  });

export default useGames;
