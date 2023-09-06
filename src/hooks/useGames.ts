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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

const useMockGames = () => {
  return {
    data: mockGameData.results,
    error: "",
    isLoading: false,
  };
};

export { useMockGames };
export default useGames;
