import staticGames from "../data/games";
import gameService, { Game, GameQuery } from "../services/game-service";
import { useQuery } from "@tanstack/react-query";

const useGames = (query: GameQuery, useLiveData = true) => {
  const params = {
    params: {
      genres: query?.genre?.id,
      parent_platforms: query?.platform?.id,
      ordering: query.order.value,
      search: query?.search,
    },
  };
  return useLiveData
    ? useQuery<Game[], Error>({
        queryKey: ["games", params],
        queryFn: () => gameService.getAll(params),
        staleTime: 5 * 60 * 1000, // 5 minutes
      })
    : {
        data: staticGames,
        isLoading: false,
        error: null,
      };
};

export default useGames;
