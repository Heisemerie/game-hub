import { GridItem, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameDetailPageSkeleton = () => {
  const gameAttributesSkeleton = [1, 2, 3, 4];
  const gameScreenshotsSkeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <GridItem gap={3}>
        <Skeleton height={10} marginBottom={3} />
        <Skeleton height={40} />
        <SimpleGrid columns={2} gap={10} marginY={5}>
          {gameAttributesSkeleton.map((skeleton) => (
            <SkeletonText noOfLines={3} key={skeleton} />
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={3}>
          {gameScreenshotsSkeleton.map((skeleton) => (
            <Skeleton height={40} key={skeleton} />
          ))}
        </SimpleGrid>
      </GridItem>
    </>
  );
};

export default GameDetailPageSkeleton;
