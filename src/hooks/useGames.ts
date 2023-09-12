import staticGames from "../data/games";
import { FetchResponse } from "../services/api-client";
import gameService, { Game, GameQuery } from "../services/game-service";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery, useLiveData = true) => {
  const staticData = { count: staticGames.length, results: staticGames };
  return useLiveData
    ? useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
          gameService.getAll({
            params: {
              genres: gameQuery?.genre?.id,
              parent_platforms: gameQuery?.platform?.id,
              ordering: gameQuery.order.value,
              search: gameQuery?.search,
            },
          }),
        staleTime: 5 * 60 * 1000, // 5 minutes
      })
    : {
        data: staticData,
        isLoading: false,
        error: null,
      };
};

export default useGames;
