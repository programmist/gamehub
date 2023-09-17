import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../../entities/Game";
import Summarize from "../Summarize";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshotGrid from "./GameScreenshotGrid";

interface Props {
  game: Game;
}
const GameDetail = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Summarize>{game.description_raw}</Summarize>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameSlug={game.slug} />
        <GameScreenshotGrid gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetail;
