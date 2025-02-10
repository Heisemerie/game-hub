import { Platform } from "../services/platformService";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import React from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  // or IconMap: { [key in Platform['slug']]: IconType } = {}

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color={"gray.500"}>
          {React.createElement(IconMap[platform.slug])}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
