import create from "./http-service";

export interface Game {
  id: number;
  name: string;
}

export default create<Game>("/games");
