import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import gameService from "../services/game-service";
import { Game } from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gameService.getAll();
    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return cancel;
  }, []);

  return { games, error };
};

export default useGames;
