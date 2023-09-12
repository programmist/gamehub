import { ApiClient, Entity } from "./api-client";

export interface Genre extends Entity {
  name: string;
  image_background: string;
}

export default new ApiClient<Genre>("/genres");
