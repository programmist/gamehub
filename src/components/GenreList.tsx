import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
