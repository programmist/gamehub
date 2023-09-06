import useData from "./useData";
import mockGenreData from "../services/mock-genres.json";
import { Entity } from "../services/http-service";

export interface Genre extends Entity {
  name: string;
  image_background: string;
}

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
