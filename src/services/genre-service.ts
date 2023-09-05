import create, { Entity } from "./http-service";

export interface Genre extends Entity {
  name: string;
}

export default create<Genre>("/genres");
