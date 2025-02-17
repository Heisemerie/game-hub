import useGames from "@/hooks/useGames";
import { Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }}
        gap={6}
        padding={{ base: 3, md: 6 }}
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
