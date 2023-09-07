import { Entity } from "../services/http-service";
import useData from "./useData";
import staticPlatforms from "../data/platforms";

export interface Platform extends Entity {
  name: string;
  slug: string;
}

const usePlatforms = (useLiveData = true) => {
  return useLiveData
    ? useData<Platform>("/platforms/lists/parents")
    : {
        data: staticPlatforms,
        isLoading: false,
        error: null,
      };
};

export default usePlatforms;
