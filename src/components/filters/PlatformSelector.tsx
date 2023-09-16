import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatform";
import usePlatforms from "../../hooks/usePlatforms";
import useGameQueryStore from "../../stores/gameQueryStore";

function PlatformSelector() {
  const {
    data: { results: platforms = [] },
    error,
  } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const platform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name ?? "Platform"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup type="radio">
          {platforms.map((platform) => (
            <MenuItemOption
              onClick={() => setPlatformId(platform.id)}
              key={platform.name}
              value={platform.slug}
            >
              {platform.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
