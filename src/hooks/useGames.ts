import { Game } from "../services/game-service";
import useData from "./useData";

const useGames = () => useData<Game>("/games");
export default useGames;
