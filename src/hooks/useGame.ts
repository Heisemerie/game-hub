import { Game } from "@/entities/Game";
import { APIclient } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const gameService = new APIclient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => gameService.get(slug),
  });

export default useGame;
