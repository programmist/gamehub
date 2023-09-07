import useData from "./useData";
import { Entity } from "../services/http-service";
import staticGenres from "../data/genres";

export interface Genre extends Entity {
  name: string;
  image_background: string;
}

const useGenres = (useLiveData = true) => {
  return useLiveData
    ? useData<Genre>("/genres")
    : {
        data: staticGenres,
        isLoading: false,
        error: null,
      };
};

export default useGenres;
