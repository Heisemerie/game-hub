import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@chakra-ui/react";
import GenreList from "./GenreList";

const GenreListDrawer = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="subtle" size="sm" fontSize={"md"} hideFrom={"md"}>
          Genres
        </Button>
      </DrawerTrigger>
      <DrawerContent offset={"1"} rounded="md" h={"100vh"}>
        <DrawerHeader>
          <DrawerTitle>Genres</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <GenreList />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default GenreListDrawer;
