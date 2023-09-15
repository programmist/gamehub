import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import useGameQueryStore from "./stores/gameQueryStore";

function App() {
  const { gameQuery, updateGenre, updatePlatform, updateSearch, updateSort } =
    useGameQueryStore();

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={({ id: genreId }) => updateGenre(genreId)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={({ id: platformId }) =>
                updatePlatform(platformId)
              }
            />
            <SortSelector
              onSortSelect={(order) => updateSort(order)}
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
