import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import sanitizeHtml from "sanitize-html";

const GameDetailPage = () => {
  const { id = "" } = useParams();
  const { data: game } = useGame(id);
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(game?.description as string),
        }}
      />
    </Box>
  );
};

export default GameDetailPage;
