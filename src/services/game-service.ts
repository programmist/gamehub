import { Platform } from "../hooks/usePlatforms";
import { ApiClient, Entity } from "./api-client";

export interface Game extends Entity {
  slug: string;
  description: string;
  description_raw: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
  rating_top: number;
}

const gameService = new ApiClient<Game>("/games");

export default gameService;
