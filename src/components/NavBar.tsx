import { HStack, Image } from "@chakra-ui/react";
import gamehub from "../assets/gamehub.png";
import gamehubdark from "../assets/gamehubdark.png";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const logo = useColorModeValue(gamehubdark, gamehub);

  return (
    <HStack padding={"10px"} marginY={5}>
      <Image src={logo} maxW={{ base: 100, md: 200 }} marginX={1} />
      <Box flex={1}>
      <SearchInput />
      </Box>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
