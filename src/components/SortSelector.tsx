import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

export interface SortOrder {
  value: string;
  label: string;
}

function SortSelector() {
  const sortOrders: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const selectedOrder = useGameQueryStore((store) => store.gameQuery.order);
  const onSortSelect = useGameQueryStore((store) => store.updateSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedOrder?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSortSelect(order)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
