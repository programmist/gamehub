import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platform-service";
import SettingsContext from "../contexts/SettingsContext";
import { useContext } from "react";
import { getEntityName } from "../services/api-client";

interface Props {
  selectedPlatformId: number | null;
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { useLiveData } = useContext(SettingsContext);
  const {
    data: { results: platforms = [] },
    error,
  } = usePlatforms(useLiveData);

  const platformName = getEntityName(platforms, selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName ?? "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
