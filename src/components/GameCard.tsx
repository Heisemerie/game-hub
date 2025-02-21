import Game from "@/entities/Game";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/imageUrl";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, parent_platforms, metacritic, slug },
}: Props) => {
  return (
    <Card.Root h={"full"}>
      <Image src={getCroppedImageUrl(background_image, 600, 400)} />
      <Card.Body>
        <HStack justify={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          {metacritic && <CriticScore score={metacritic} />}
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={`/games/${slug}`}>{name}</Link>
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
