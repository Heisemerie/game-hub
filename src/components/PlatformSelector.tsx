import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="md" fontSize={"md"}>
          Platform
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(platform => <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
