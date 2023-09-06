import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { useMockPlatforms } from "../hooks/usePlatforms";

function PlatformSelector() {
  // const { data: platforms } = usePlatforms();
  const { data: platforms, error } = useMockPlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {platforms.map(({ id, name }) => (
          <MenuItem key={id}>{name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
