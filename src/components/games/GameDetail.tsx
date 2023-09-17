import { Box, Center, Heading } from "@chakra-ui/react";
import { Game } from "../../entities/Game";
import Summarize from "../Summarize";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";

interface Props {
  game: Game;
}
const GameDetail = ({ game }: Props) => {
  return (
    <>
      <Heading>{game.name}</Heading>
      <Summarize>{game.description_raw}</Summarize>
      <GameAttributes game={game} />
      <Box marginBottom={5}>
        <Center>
          {/* Note: Shows only first trailer */}
          <GameTrailer gameSlug={game.slug} />
        </Center>
      </Box>
    </>
  );
};

export default GameDetail;
