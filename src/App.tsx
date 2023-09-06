import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

function App() {
  let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  let [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleGenreSelection = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handlePlatformSelection = (platform: Platform) => {
    setSelectedPlatform(platform);
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={handleGenreSelection}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading marginBottom={6}>Games</Heading>
        <HStack>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={handlePlatformSelection}
          />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
