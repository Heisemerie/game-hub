import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="md" fontSize={"md"}>
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value={"Relevance"}>Relevance</MenuItem>
        <MenuItem value={"Date Added"}>Date Added</MenuItem>
        <MenuItem value={"Name"}>Name</MenuItem>
        <MenuItem value={"Release Date"}>Release Date</MenuItem>
        <MenuItem value={"Popularity"}>Popularity</MenuItem>
        <MenuItem value={"Average Rating"}>Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
