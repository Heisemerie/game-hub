import useGameQueryStore from "@/gameQueryStore";
import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/imageUrl";
import { Button, Image, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore((store) => store.setGenreId);
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root
      variant={"plain"}
      overflowY={"scroll"}
      h={"100vh"}
      scrollbarWidth={"none"}
      position={"sticky"}
      top={0}
    >
      {data?.results.map((genre) => (
        <List.Item
          key={genre.id}
          alignItems={"center"}
          margin={"auto"}
          marginY={1}
          w={"4/5"}
        >
          <Button
            fontSize={"md"}
            variant={genreId === genre.id ? "subtle" : "ghost"}
            textAlign={"left"}
            justifyContent={"flex-start"}
            whiteSpace={"normal"}
            flex={1}
            onClick={() => setGenreId(genre.id)}
          >
            <List.Indicator asChild>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize={"32px"}
                borderRadius={8}
              />
            </List.Indicator>
            {genre.name}
          </Button>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
