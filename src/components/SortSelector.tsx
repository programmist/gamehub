import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  const sortTypes = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];
  const [sortType, setSortType] = useState(sortTypes[0]);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortType}
      </MenuButton>
      <MenuList>
        {sortTypes.map((type) => (
          <MenuItem onClick={() => setSortType(type)} key={type}>
            {type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
