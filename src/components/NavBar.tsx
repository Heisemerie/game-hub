import { HStack, Image } from "@chakra-ui/react";
import gamehub from "../assets/gamehub.png";
import gamehubdark from "../assets/gamehubdark.png";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}


const NavBar = ({onSearch}:Props) => {
const logo = useColorModeValue(gamehubdark, gamehub);

  return (
    <HStack padding={"10px"} marginY={5}>
      <Image src={logo} maxW={{base:100, md:200}} marginX={1}/>
      <SearchInput onSearch={onSearch}/>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
