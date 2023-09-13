import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import { GameQuery } from "../services/game-service";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery: { platformId, genreId } }: Props) {
  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
