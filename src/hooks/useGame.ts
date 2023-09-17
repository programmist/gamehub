import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/game-service";
import ms from "ms";

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug),
    staleTime: ms("1 day"),
    // initialData: staticGenres,
  });
};

export default useGame;
