import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import { Button, Heading, Image, List, Spinner } from "@chakra-ui/react";

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
      <Heading paddingX={7} paddingBottom={3}>
        Genres
      </Heading>
      <List.Root
        variant={"plain"}
        overflowY={"scroll"}
        h={"100vh"}
        scrollbarWidth={"none"}
        position={"sticky"}
        top={0}
      >
        {data.map((genre) => (
          <List.Item
            key={genre.id}
            alignItems={"center"}
            margin={"auto"}
            marginY={1}
            w={"4/5"}
          >
            <Button
              fontSize={"md"}
              variant={selectedGenre?.id === genre.id ? "subtle" : "ghost"}
              textAlign={"left"}
              justifyContent={"flex-start"}
              whiteSpace={"normal"}
              flex={1}
              onClick={() => onSelectGenre(genre)}
            >
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize={"32px"}
                borderRadius={8}
              />
              {genre.name}
            </Button>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
