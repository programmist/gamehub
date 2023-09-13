import { getEntity } from "../services/api-client";
import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const {
    data: { results: genres = [] },
  } = useGenres();

  return getEntity(genres, genreId);
};

export default useGenre;
