import renderIcon from "@/services/renderIcon";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color={"gray.500"}>
          {renderIcon(platform.slug)}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
