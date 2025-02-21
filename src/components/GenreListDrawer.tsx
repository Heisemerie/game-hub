import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from "@chakra-ui/react";
import GenreList from "./GenreList";

const GenreListDrawer = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerTrigger asChild>
        <Button variant="subtle" size="xs" fontSize={"md"} hideFrom={"md"}>
          Genres
        </Button>
      </DrawerTrigger>
      <DrawerContent offset={"1"} rounded="md" h={"full"}>
        <DrawerHeader>
          <DrawerTitle>Genres</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <GenreList alignItems="left" margin="none" whitespace="none" />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default GenreListDrawer;
