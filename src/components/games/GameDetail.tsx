import { Heading } from "@chakra-ui/react";
import { Game } from "../../entities/Game";
import Summarize from "../Summarize";
import GameAttributes from "./GameAttributes";

interface Props {
  game: Game;
}
const GameDetail = ({ game }: Props) => {
  return (
    <>
      <Heading>{game.name}</Heading>
      <Summarize>{game.description_raw}</Summarize>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetail;
