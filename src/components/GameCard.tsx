import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, parent_platforms, metacritic },
}: Props) => {
  return (
    <Card.Root>
      <Image src={ getCroppedImageUrl(background_image, 600, 400)} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{name}</Heading>
        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          {metacritic && <CriticScore score={metacritic} />}
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
