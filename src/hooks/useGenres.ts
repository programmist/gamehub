import { Genre } from "../services/genre-service";
import useData from "./useData";
import mockGenreData from "../services/mock-genres.json";

const useGenres = () => useData<Genre>("/genres");

const useMockGenres = () => {
  return {
    data: mockGenreData.results,
    error: "",
    isLoading: false,
  };
};

export { useMockGenres };
export default useGenres;
