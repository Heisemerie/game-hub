import { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameDetailPageContainer = ({ children }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={4}
      paddingX={{ base: 5, md: 20 }}
      paddingBottom={{ base: 5, md: 10 }}
    >
      {children}
    </SimpleGrid>
  );
};

export default GameDetailPageContainer;
