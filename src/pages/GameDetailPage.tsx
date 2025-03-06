import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameDetailPageContainer from "@/components/GameDetailPageContainer";
import GameDetailPageSkeleton from "@/components/GameDetailPageSkeleton";
import GameScreenshots from "@/components/GameScreenshots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { GridItem, Heading, Link, Text } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return (
      <GameDetailPageContainer>
        <GameDetailPageSkeleton />
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
