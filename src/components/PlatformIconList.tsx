import PlatformIcon from "@/components/PlatformIcon";
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon key={platform.id} color={"gray.500"}>
          {PlatformIcon(platform.slug)}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
