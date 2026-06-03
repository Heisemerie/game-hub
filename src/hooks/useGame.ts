import Game from "@/entities/Game";
import { ApiClient } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const gameService = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => gameService.get(slug),
  });

export default useGame;
