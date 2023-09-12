import staticGames from "../data/games";
import { FetchResponse } from "../services/api-client";
import gameService, { Game, GameQuery } from "../services/game-service";
import { useQuery } from "@tanstack/react-query";

const useGames = (query: GameQuery, useLiveData = true) => {
  const staticData = { count: staticGames.length, results: staticGames };
  const params = {
    params: {
      genres: query?.genre?.id,
      parent_platforms: query?.platform?.id,
      ordering: query.order.value,
      search: query?.search,
    },
  };
  return useLiveData
    ? useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", params],
        queryFn: () => gameService.getAll(params),
        staleTime: 5 * 60 * 1000, // 5 minutes
      })
    : {
        data: staticData,
        isLoading: false,
        error: null,
      };
};

export default useGames;
