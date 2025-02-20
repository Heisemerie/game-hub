import useGame from "@/hooks/useGame";
import { Box, Center, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (error || !data) throw error;

  return (
    <Box p={5}>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
