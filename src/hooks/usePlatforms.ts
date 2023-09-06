import { Entity } from "../services/http-service";
import useData from "./useData";
import mockPlatforms from "../services/mock-platforms.json";

export interface Platform extends Entity {
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const useMockPlatforms = () => {
  return {
    data: mockPlatforms.results,
    error: "",
    isLoading: false,
  };
};

export { useMockPlatforms };

export default usePlatforms;
