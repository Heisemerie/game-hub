import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game:{name, background_image, parent_platforms} }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={background_image} />
      <Card.Body>
        <Heading fontSize={'2xl'}>{name}</Heading>
        <PlatformIconList platforms={parent_platforms.map(({ platform }) => platform)} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
