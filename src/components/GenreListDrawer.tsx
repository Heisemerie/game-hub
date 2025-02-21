import { Button } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import GenreList from "./GenreList";

const GenreListDrawer = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant="subtle"
          size={{ base: "xs", md: "md" }}
          fontSize={"md"}
          hideFrom={"lg"}
        >
          Genres
        </Button>
      </DrawerTrigger>
      <DrawerContent>
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
