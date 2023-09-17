import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import ms from "ms";
import { ApiClient } from "../services/api-client";

const gameService = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => gameService.get(slug),
    staleTime: ms("1 day"),
  });
};

export default useGame;
