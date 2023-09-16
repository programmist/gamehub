import { Box, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "./components/filters/GenreList";
import PlatformSelector from "./components/filters/PlatformSelector";
import SortSelector from "./components/filters/SortSelector";
import GameGrid from "./components/games/GameGrid";
import GameHeading from "./components/games/GameHeading";

function App() {
  return (
    <>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </>
  );
}

export default App;
