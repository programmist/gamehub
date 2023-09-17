import { Box, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameDetail from "../components/games/GameDetail";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <GameDetail game={game} />
    </Box>
  );
};

export default GameDetailPage;
