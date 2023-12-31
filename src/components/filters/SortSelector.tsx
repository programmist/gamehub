import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../stores/gameQueryStore";

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

  const selectedOrder = useGameQueryStore((s) => s.gameQuery.order);
  const setSort = useGameQueryStore((s) => s.setSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedOrder?.label ?? "Relevance"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup type="radio">
          {sortOrders.map((order) => (
            <MenuItemOption
              onClick={() => setSort(order)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
