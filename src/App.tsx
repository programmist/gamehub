import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { GameQuery } from "./services/game-service";

function App() {
  let [gameQuery, setGameQuery] = useState<GameQuery>({
    order: { value: "", label: "Relevance" },
    search: "",
    pageSize: 10,
  } as GameQuery);

  const handleGenreSelection = (genreId: number) => {
    setGameQuery({ ...gameQuery, genreId });
  };

  const handlePlatformSelection = (platformId: number) => {
    setGameQuery({ ...gameQuery, platformId });
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
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => handleGenreSelection(genre.id)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                handlePlatformSelection(platform.id)
              }
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
