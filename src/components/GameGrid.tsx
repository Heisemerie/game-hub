import useGames from "@/hooks/useGames";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import { Fragment } from "react/jsx-runtime";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(data?.pageParams);

  if (error)
    return (
      <Heading
        fontSize={"4xl"}
        margin={"auto"}
        boxSize={"50vw"}
        textAlign={"center"}
        alignContent={"center"}
      >
        {error.message}
      </Heading>
    );

  return (
    <Box padding={{ base: 3, md: 6 }}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }} gap={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          variant={"subtle"}
          marginY={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
