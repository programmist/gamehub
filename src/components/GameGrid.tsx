import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../services/game-service";
import { useContext } from "react";
import SettingsContext from "../contexts/SettingsContext";

interface Props {
  query: GameQuery;
}

function GameGrid({ query }: Props) {
  const { useLiveData } = useContext(SettingsContext);
  const { data: games, error, isLoading } = useGames(query, useLiveData);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((sk) => (
          <GameCardContainer key={sk}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
