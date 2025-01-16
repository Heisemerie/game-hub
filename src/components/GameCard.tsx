import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, parent_platforms, metacritic },
}: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={background_image} />
      <Card.Body>
        <Heading fontSize={"2xl"}>{name}</Heading>
        <HStack justify={"space-between"}>
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
