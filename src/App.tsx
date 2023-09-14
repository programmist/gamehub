import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useReducer } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import gameQueryReducer from "./reducers/gameQueryReducer";

function App() {
  let [gameQuery, dispatch] = useReducer(gameQueryReducer, {
    order: { value: "", label: "Relevance" },
    search: "",
    pageSize: 10,
  });

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
        <NavBar
          onSearchSubmit={(search) => {
            dispatch({ type: "SEARCH_UPDATE", search });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={({ id: genreId }) =>
              dispatch({ type: "GENRE_UPDATE", genreId })
            }
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
                dispatch({ type: "PLATFORM_UPDATE", platformId })
              }
            />
            <SortSelector
              onSortSelect={(order) => dispatch({ type: "SORT_UPDATE", order })}
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
