import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  hover: boolean;
}

const GameCardContainer = ({ children, hover }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={hover ? { scale: "1.05" } : undefined}
      transition={"scale 0.3s ease-in-out"}
      shadow={'xl'}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
