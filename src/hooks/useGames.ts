import useData from "./useData";
import staticGames from "../data/games";
import { Entity } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";
import { SortOrder } from "../components/SortSelector";

export interface Game extends Entity {
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  search: string;
  genre: Genre | null;
  platform: Platform | null;
  order: SortOrder;
}

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
