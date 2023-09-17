import React from "react";
import { Entity } from "./Entity";

export default interface Publisher extends Entity {
  slug: string;
  games_count: number;
  image_background: string;
}
