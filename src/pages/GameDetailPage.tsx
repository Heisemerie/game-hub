import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameDetailPageContainer from "@/components/GameDetailPageContainer";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import useGame from "@/hooks/useGame";
import {
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const gameAttributesSkeleton = [1, 2, 3, 4];

  const gameScreenshotsSkeleton = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <GameDetailPageContainer>
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
      </GameDetailPageContainer>
    );
  }

  if (error || !game) throw error;

  return (
    <GameDetailPageContainer>
      {!isLoading && (
        <>
          <GridItem>
            <Heading fontSize={30} marginBottom={3}>
              {game.name}
            </Heading>
            <ExpandableText maxChars={500}>
              {game.description_raw}
            </ExpandableText>
            <Link href={game.website} target="blank" colorPalette="teal">
              {game.name} Website
              <LuExternalLink />
            </Link>
            <Text>Release Date: {game.released}</Text>
            <GameAttributes game={game} />
          </GridItem>
          <GridItem>
            <GameTrailer gameId={game.id} />
            <GameScreenshots gameId={game.id} />
          </GridItem>
        </>
      )}
    </GameDetailPageContainer>
  );
};

export default GameDetailPage;
