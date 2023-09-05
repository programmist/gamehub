import { Game } from "../services/game-service";
import useData from "./useData";
import mockGameData from "../services/mock-games.json";

const useGames = () => useData<Game>("/games");

const useMockGames = () => {
  return {
    data: mockGameData.results,
    error: "",
    isLoading: false,
  };
};

export { useMockGames };
export default useGames;
