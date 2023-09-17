import { useQuery } from "@tanstack/react-query";
import { Game, gameService } from "./useGames";
import ms from "ms";

const useGame = (id: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => gameService.get(id),
    staleTime: ms("1 day"),
    // initialData: staticGenres,
  });
};

export default useGame;
