import { Box, Center, Heading } from "@chakra-ui/react";
import { Game } from "../../entities/Game";
import useTrailers from "../../hooks/useTrailers";
import Summarize from "../Summarize";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";

interface Props {
  game: Game;
}
const GameDetail = ({ game }: Props) => {
  const { data } = useTrailers(game.slug);
  const trailers = data?.results;

  if (!trailers) return null;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Summarize>{game.description_raw}</Summarize>
      <GameAttributes game={game} />
      {trailers.map((trailer) => (
        <Box key={trailer.id} marginBottom={5}>
          <Center>
            <GameTrailer trailer={trailer} />
          </Center>
        </Box>
      ))}
    </>
  );
};

export default GameDetail;
