import useData from "./useData";
import mockGameData from "../services/mock-games.json";
import { Entity } from "../services/http-service";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";

export interface Game extends Entity {
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const useGames = (query: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: query?.genre?.id,
        parent_platforms: query?.platform?.id,
      },
    },
    [query]
  );

const useMockGames = () => {
  return {
    data: mockGameData.results,
    error: "",
    isLoading: false,
  };
};

export { useMockGames };
export default useGames;
