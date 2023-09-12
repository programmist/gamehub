import useData from "./useData";
import staticGames from "../data/games";
import { Game, GameQuery } from "../services/game-service";

const useGames = (query: GameQuery, useLiveData = true) => {
  return useLiveData
    ? useData<Game>(
        "/games",
        {
          params: {
            genres: query?.genre?.id,
            parent_platforms: query?.platform?.id,
            ordering: query.order.value,
            search: query?.search,
          },
        },
        [query]
      )
    : {
        data: staticGames,
        isLoading: false,
        error: null,
      };
};

export default useGames;
