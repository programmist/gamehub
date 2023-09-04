import create from "./http-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export default create<Game>("/games");
