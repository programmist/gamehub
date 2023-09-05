import create, { Entity } from "./http-service";

export interface Genre extends Entity {
  name: string;
  image_background: string;
}

export default create<Genre>("/genres");
