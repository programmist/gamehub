import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
