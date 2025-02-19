import renderIcon from "@/services/renderIcon";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../services/platformService";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id}>{renderIcon(platform.slug)}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
