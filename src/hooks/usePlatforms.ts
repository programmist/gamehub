import useData from "./useData";
import staticPlatforms from "../data/platforms";
import { Platform } from "../services/platform-service";

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
