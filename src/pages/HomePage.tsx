import GameGrid from "@/components/HomePage/GameGrid";
import GameHeading from "@/components/HomePage/GameHeading";
import GenreList from "@/components/HomePage/GenreList";
import GenreListDrawer from "@/components/HomePage/GenreListDrawer";
import PlatformSelector from "@/components/HomePage/PlatformSelector";
import SortSelector from "@/components/HomePage/SortSelector";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
        lg: ` 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "235px 1fr",
      }}
    >
      <GridItem area={"aside"} hideBelow={"lg"} paddingX={1}>
        <GenreList />
      </GridItem>

      <GridItem area={"main"}>
        <Box paddingLeft={{ base: 3, md: 6 }}>
          <GameHeading />
          <HStack>
            <GenreListDrawer />
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
