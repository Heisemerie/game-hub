import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "235px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem area={"aside"} hideBelow={"lg"} paddingX={1}>
        <GenreList
          onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>

      <GridItem area={"main"}>
        <Box paddingLeft={{ base: 3, md: 6 }}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrderValue={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
