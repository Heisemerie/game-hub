import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading paddingX={3} paddingBottom={3}>Genres</Heading>
      <List.Root variant={"plain"}>
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack
              w={"full"}
              borderRightRadius={3}
              overflow={"hidden"}
              marginX={3}
            >
              <List.Indicator asChild>
                <Image
                  src={getCroppedImageUrl(genre.image_background, 600, 400)}
                  boxSize={"32px"}
                  borderRadius={8}
                />
              </List.Indicator>
              <Button
                fontSize={"lg"}
                variant={selectedGenre?.id === genre.id ? "subtle" : "ghost"}
                flex={1}
                textAlign={"left"}
                justifyContent={"flex-start"}
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
