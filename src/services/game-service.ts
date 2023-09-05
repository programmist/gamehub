import create, { Entity } from "./http-service";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game extends Entity {
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export default create<Game>("/games");
