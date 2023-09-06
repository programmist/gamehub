import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchSubmit: (searchText: string) => void;
}

function NavBar({ onSearchSubmit }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
