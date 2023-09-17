import useTrailers from "../../hooks/useTrailers";

interface Props {
  gameSlug: string;
}

const GameTrailer = ({ gameSlug }: Props) => {
  const { data, error, isLoading } = useTrailers(gameSlug);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return firstTrailer ? (
    <video poster={firstTrailer.preview} preload="auto" controls>
      <source src={firstTrailer.data["480"]} />
    </video>
  ) : null;
};

export default GameTrailer;
