import gameService from "@/services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => gameService.get(slug),
  });

  export default useGame