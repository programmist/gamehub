import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import sanitizeHtml from "sanitize-html";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <Text
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(game.description as string),
        }}
      />
    </Box>
  );
};

export default GameDetailPage;
