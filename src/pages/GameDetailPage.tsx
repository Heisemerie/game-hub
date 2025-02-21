import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const gameAttributesSkeleton = [1, 2, 3, 4];

  const gameScreenshotsSkeleton = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap={4}
        paddingX={{ base: 5, md: 10 }}
      >
        <GridItem gap={3}>
          <Skeleton height="4em" marginBottom={3} />
          <SkeletonText noOfLines={3} marginY={1} height={"2em"} />
          <SimpleGrid columns={2} gap={10} marginY={5}>
            {gameAttributesSkeleton.map((skeleton) => (
              <SkeletonText noOfLines={3} key={skeleton} />
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <SimpleGrid columns={{ sm: 1, md: 2 }} gap={3}>
            {gameScreenshotsSkeleton.map((skeleton) => (
              <Skeleton height="10em" key={skeleton} />
            ))}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    );
  }

  if (error || !game) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={4}
      paddingX={{ base: 5, md: 10 }}
    >
      {!isLoading && (
        <>
          <GridItem>
            <Heading fontSize={30} marginBottom={3}>
              {game.name}
            </Heading>
            <ExpandableText maxChars={500}>
              {game.description_raw}
            </ExpandableText>
            <GameAttributes game={game!} />
          </GridItem>
          <GridItem>
            <GameTrailer gameId={game.id} />
            <GameScreenshots gameId={game.id} />
          </GridItem>
        </>
      )}
    </SimpleGrid>
  );
};

export default GameDetailPage;
