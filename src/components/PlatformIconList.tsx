import { HStack, Icon } from "@chakra-ui/react";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../services/platformService";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const renderIcon = (slug: string) => {
    switch (slug) {
      case "pc":
        return <FaWindows />;
      case "playstation":
        return <FaPlaystation />;
      case "xbox":
        return <FaXbox />;
      case "ios":
        return <MdPhoneIphone />;
      case "linux":
        return <FaLinux />;
      case "android":
        return <FaAndroid />;
      case "mac":
        return <FaApple />;
      case "nintendo":
        return <SiNintendo />;
      case "web":
        return <BsGlobe />;
      default:
        return <FaGamepad />;
    }
  };
  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon key={platform.id}>{renderIcon(platform.slug)}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
