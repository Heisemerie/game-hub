import usePlatforms from "@/hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/gameQueryStore";
import renderIcon from "@/components/PlatformIcon";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((store) => store.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(platformId);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="subtle"
          size={{ base: "xs", md: "md" }}
          fontSize={"md"}
        >
          {platformId ? selectedPlatform?.name : "Platform"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => setPlatformId(platform.id)}
          >
            {renderIcon(platform.slug)}
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
