import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshotGrid = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots.map((screenshot) => (
        <Image src={screenshot.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshotGrid;
