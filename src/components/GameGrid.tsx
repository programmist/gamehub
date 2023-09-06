import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GameQuery, useMockGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  query: GameQuery;
}

function GameGrid({ query }: Props) {
  const { data: games, error, isLoading } = useMockGames();
  // const { data: games, error, isLoading } = useGames(query);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContainer key={sk}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
