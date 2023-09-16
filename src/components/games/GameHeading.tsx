import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../../stores/gameQueryStore";
import usePlatform from "../../hooks/usePlatform";
import useGenre from "../../hooks/useGenre";

interface Props {
  platformName?: string;
  genreName?: string;
}

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  return (
    <Heading as="h1" marginBottom={6} fontSize="5xl">
      {selectedGenre?.name} {selectedPlatform?.name} Games
    </Heading>
  );
}

export default GameHeading;
