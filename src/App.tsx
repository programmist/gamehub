import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { GameQuery } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { SortOrder } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  let [gameQuery, setGameQuery] = useState<GameQuery>({
    order: { value: "", label: "Relevance" },
    search: "",
  } as GameQuery);

  const handleGenreSelection = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handlePlatformSelection = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSortSelection = (order: SortOrder) => {
    setGameQuery({ ...gameQuery, order });
  };

  const handleSearchChange = (search: string) => {
    if (search !== gameQuery.search) {
      setGameQuery({ ...gameQuery, search });
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearchSubmit={handleSearchChange} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={handleGenreSelection}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={handlePlatformSelection}
            />
            <SortSelector
              onSortSelect={handleSortSelection}
              selectedOrder={gameQuery.order}
            />
          </HStack>
        </Box>
        <GameGrid query={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
