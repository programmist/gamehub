import { ApiClient, Entity } from "./api-client";

export interface Genre extends Entity {
  image_background: string;
}

export default new ApiClient<Genre>("/genres");
