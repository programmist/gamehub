import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import { getEntityName } from "../services/api-client";
import { GameQuery } from "../services/game-service";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery: { platformId, genreId } }: Props) {
  const {
    data: { results: platforms = [] },
  } = usePlatforms();

  const {
    data: { results: genres = [] },
  } = useGenres();

  const platformName = getEntityName(platforms, platformId);
  const genreName = getEntityName(genres, genreId);

  const heading = `${platformName ?? ""} ${genreName ?? ""} Games`;

  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
