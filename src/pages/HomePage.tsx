import GameGrid from '@/components/GameGrid'
import GameHeading from '@/components/GameHeading'
import GenreList from '@/components/GenreList'
import GenreListDrawer from '@/components/GenreListDrawer'
import PlatformSelector from '@/components/PlatformSelector'
import SortSelector from '@/components/SortSelector'
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'

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
            <GenreListDrawer/>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage