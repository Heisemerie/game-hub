import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{ scale: "1.05" }}
      transition={"scale 0.3s ease-in-out"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
