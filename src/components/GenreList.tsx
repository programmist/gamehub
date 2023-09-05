import useData from "../hooks/useData";
import useGenres, { useMockGenres } from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

function GenreList() {
  const { data: genres, error, isLoading } = useMockGenres();
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
