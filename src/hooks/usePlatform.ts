import { getEntity } from "../services/api-client";
import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const {
    data: { results: platforms = [] },
  } = usePlatforms();

  return getEntity(platforms, platformId);
};

export default usePlatform;
