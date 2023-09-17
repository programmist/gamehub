import {
  FaWindows,
  FaLinux,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../../entities/Platform";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  linux: FaLinux,
  mac: FaApple,
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

function PlatformIconList({ platforms }: Props) {
  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="green.300" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
