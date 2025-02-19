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
import { SiAtari, SiCommodore, SiNintendo, SiSega } from "react-icons/si";

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
    case "atari":
      return <SiAtari />;
    case "sega":
      return <SiSega />;
    case "commodore-amiga":
      return <SiCommodore />;
    default:
      return <FaGamepad />;
  }
};

export default renderIcon;
