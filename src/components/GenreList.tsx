import useGenres, { Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props{
  onSelectGenre: (genre: Genres) => void
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root variant={"plain"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={1}>
          <HStack>
            <List.Indicator asChild>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize={"32px"}
                borderRadius={8}
              />
            </List.Indicator>
            <Button
              fontSize={"lg"}
              variant={"ghost"}
              w={"150px"}
              overflow={"clip"}
              justifyContent={"start"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
