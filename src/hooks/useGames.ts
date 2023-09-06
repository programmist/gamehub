import { Game } from "../services/game-service";
import useData from "./useData";
import mockGameData from "../services/mock-games.json";
import { Genre } from "../services/genre-service";

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
