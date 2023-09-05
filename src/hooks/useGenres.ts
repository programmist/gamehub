import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService, { Genre } from "../services/genre-service";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
